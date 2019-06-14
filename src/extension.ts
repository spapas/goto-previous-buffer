import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('goto-previous-buffer: The extension "goto-previous-buffer" is now active!');

	let disposable = vscode.commands.registerCommand('extension.goto-previous-buffer', () => {
		var pate = context.workspaceState.get("PREVIOUS_ACTIVE_TEXT_EDITOR") as vscode.TextEditor;
		
		if(pate) {
			console.log("goto-previous-buffer: PATE IS " + pate.document.fileName);

			vscode.window.setStatusBarMessage('Going to the previous buffer: ' + pate.document.fileName, 2000);

			let uri = vscode.Uri.file( pate.document.fileName);
			vscode.commands.executeCommand('vscode.open', uri);
		} else {
			console.log("goto-previous-buffer: PATE IS undef..." );
		}
	});
	
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(function() { changeActiveTextEditor(context); } ));
	context.subscriptions.push(disposable);
}

function changeActiveTextEditor(context: vscode.ExtensionContext): void {
	var current = vscode.window.activeTextEditor;
	if(current) {
		console.log("goto-previous-buffer: CHANGED to: " + current.document.fileName);
		var cate = context.workspaceState.get("CURRENT_ACTIVE_TEXT_EDITOR") as vscode.TextEditor;
		context.workspaceState.update("PREVIOUS_ACTIVE_TEXT_EDITOR", cate) ;
		context.workspaceState.update("CURRENT_ACTIVE_TEXT_EDITOR", current) ;
	}
}

export function deactivate() {}
