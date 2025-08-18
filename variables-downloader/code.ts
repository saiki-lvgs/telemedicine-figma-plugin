// メインスレッドコード（Figma API側）
async function exportVariables() {
	try {
		// データ取得と検証
		const variables = await figma.variables.getLocalVariablesAsync();
		const collections =
			await figma.variables.getLocalVariableCollectionsAsync();

		if (!variables || variables.length === 0) {
			throw new Error(
				"No variables found in this document. Please create some variables first."
			);
		}

		const mapping: Record<string, any> = {};
		const collectionMapping: Record<string, any> = {};
		const warnings: string[] = [];
		const stats = {
			totalVariables: variables.length,
			collections: collections.length,
			typeBreakdown: {} as Record<string, number>,
			issues: [] as string[],
		};

		// コレクション情報をマッピング
		for (const collection of collections) {
			collectionMapping[collection.id] = {
				name: collection.name,
				modes: collection.modes.map((mode) => ({
					modeId: mode.modeId,
					name: mode.name,
				})),
			};
		}

		// 変数を処理して検証
		for (const variable of variables) {
			try {
				const modes = Object.keys(variable.valuesByMode);
				if (modes.length === 0) {
					warnings.push(`Variable "${variable.name}" has no modes defined`);
					continue;
				}

				const mode = modes[0];
				const value = variable.valuesByMode[mode];

				// 型別統計
				stats.typeBreakdown[variable.resolvedType] =
					(stats.typeBreakdown[variable.resolvedType] || 0) + 1;

				// 値の検証
				if (value === undefined || value === null) {
					stats.issues.push(
						`Variable "${variable.name}" has undefined/null value`
					);
				}

				mapping[variable.id] = {
					name: variable.name,
					value: value,
					type: variable.resolvedType,
					collection: variable.variableCollectionId,
					collectionName:
						collectionMapping[variable.variableCollectionId]?.name || "Unknown",
					modes: modes.length,
				};
			} catch (varError) {
				warnings.push(
					`Error processing variable "${variable.name}": ${
						(varError as Error).message
					}`
				);
			}
		}

		console.log("🚀 Starting Variable ID export...");
		console.log(`📊 Found ${variables.length} variables`);
		console.log(`🏷️ Type breakdown:`, stats.typeBreakdown);

		if (warnings.length > 0) {
			console.warn("⚠️ Warnings:", warnings);
		}

		// UIスレッドにデータを送信
		figma.ui.postMessage({
			type: "VARIABLES_DATA",
			data: mapping,
			collections: collectionMapping,
			count: variables.length,
			stats: stats,
			warnings: warnings,
		});

		const warningText =
			warnings.length > 0 ? ` (${warnings.length} warnings)` : "";
		figma.notify(
			`✅ Found ${variables.length} variables! Check the plugin UI for download.${warningText}`
		);
	} catch (error) {
		const errorMessage = (error as Error).message;
		console.error("❌ Error exporting variables:", error);

		// より詳細なエラー情報を生成
		let detailedError = errorMessage;
		if (errorMessage.includes("variables")) {
			detailedError +=
				"\n\nPossible causes:\n- No variables exist in this document\n- Variables API access is restricted\n- Plugin permissions are insufficient";
		}

		figma.ui.postMessage({
			type: "ERROR",
			message: errorMessage,
			detailedMessage: detailedError,
			timestamp: new Date().toISOString(),
		});

		figma.notify("❌ Error: " + errorMessage);
	}
}

// UI起動時にプラグインUI表示
figma.showUI(__html__, { width: 450, height: 600 });

// UI側からのメッセージ受信
figma.ui.onmessage = (msg) => {
	if (msg.type === "START_EXPORT") {
		exportVariables();
	} else if (msg.type === "CLOSE_PLUGIN") {
		figma.closePlugin();
	}
};
