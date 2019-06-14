import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "goto-previous-buffer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.goto-previous-buffer', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		var pate = context.workspaceState.get("PREVIOUS_ACTIVE_TEXT_EDITOR") as vscode.TextEditor;
		
		if(pate) {
			console.log("PATE IS " + pate.document.fileName)

			//vscode.window.showInformationMessage('Going to the previous buffer: ' + pate.document.fileName);
			vscode.window.setStatusBarMessage('Going to the previous buffer: ' + pate.document.fileName, 2000);
			//vscode.window.activeTextEditor = pate;
			let uri = vscode.Uri.file( pate.document.fileName);
			vscode.commands.executeCommand('vscode.open', uri);
		} else {
			console.log("PATE IS undef" )
		}
	});

	
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(function() { changeActiveTextEditor(context); } ));
	context.subscriptions.push(disposable);
}

function changeActiveTextEditor(context: vscode.ExtensionContext): void {
	var current = vscode.window.activeTextEditor;
	if(current) {
		console.log("CHANGED to: " + current.document.fileName);
		var cate = context.workspaceState.get("CURRENT_ACTIVE_TEXT_EDITOR") as vscode.TextEditor;
		context.workspaceState.update("PREVIOUS_ACTIVE_TEXT_EDITOR", cate) ;
		context.workspaceState.update("CURRENT_ACTIVE_TEXT_EDITOR", current) ;
	}

}

// this method is called when your extension is deactivated
export function deactivate() {}
