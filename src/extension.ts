import * as vscode from 'vscode';

const tokenTypes = ["function", "variable"]
const tokenModifiers = ["declaration"]

const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

const provider : vscode.DocumentSemanticTokensProvider = {
	provideDocumentSemanticTokens(document, token){
		const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
		
		return tokensBuilder.build();
	}
};

export function activate(context: vscode.ExtensionContext) {

	const selector = { language: 'miniml'};
	context.subscriptions.push(
		vscode.languages.registerDocumentSemanticTokensProvider(selector,provider,legend)
	);
}
