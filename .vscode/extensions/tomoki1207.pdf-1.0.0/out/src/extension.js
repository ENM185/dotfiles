"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const pdfProvider_1 = require("./pdfProvider");
function activate(context) {
    const extensionRoot = vscode.Uri.file(context.extensionPath);
    // Register our custom editor provider
    const provider = new pdfProvider_1.PdfCustomProvider(extensionRoot);
    context.subscriptions.push(vscode.window.registerCustomEditorProvider(pdfProvider_1.PdfCustomProvider.viewType, provider, {
        webviewOptions: {
            enableFindWidget: false,
            retainContextWhenHidden: true,
        },
    }));
    // show warning about extension view broken
    vscode.window
        .showInformationMessage('You might not be able to show some extensions.', 'More Info')
        .then((v) => {
        if (v === 'More Info') {
            vscode.env.openExternal(vscode.Uri.parse('https://github.com/tomoki1207/vscode-pdfviewer#important-notice'));
        }
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map