async function exportVariables() {
	try {
		console.log("🚀 Starting Variable ID export...");

		const variables = await figma.variables.getLocalVariablesAsync();
		console.log(`📊 Found ${variables.length} variables`);

		const mapping: Record<string, any> = {};

		for (const variable of variables) {
			const modes = Object.keys(variable.valuesByMode);
			const mode = modes[0]; // Use first mode

			mapping[variable.id] = {
				name: variable.name,
				value: variable.valuesByMode[mode],
				type: variable.resolvedType,
				collection: variable.variableCollectionId,
			};
		}

		console.log("=== VARIABLE ID MAPPING START ===");
		console.log(JSON.stringify(mapping, null, 2));
		console.log("=== VARIABLE ID MAPPING END ===");

		figma.notify(`✅ Exported ${variables.length} variables to console!`);
		console.log(
			"💡 Copy the JSON from console and save as variable-mapping.json"
		);
	} catch (error) {
		console.error("❌ Error:", error);
		figma.notify("Error: " + (error as Error).message);
	}

	figma.closePlugin();
}

// Run the export function
exportVariables();
