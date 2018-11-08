import * as Types from '../types';
import * as Model from '../model';

export interface RenderDocumentData {
	payload: {
		host: Types.HostType;
		view: Types.AlvaView;
		project?: Model.Project;
	};
}

export const rendererDocument = (data: RenderDocumentData) => `<!doctype html>
<html>
<head>
</head>
<body>
	<div id="app" style="overflow: hidden; width: 100%; height: 100%;"></div>
	<textarea id="data" style="display: none;">${encodeURIComponent(
		JSON.stringify(data.payload)
	)}</textarea>
	<script src="/scripts/Mobx.js"></script>
	<script src="/scripts/renderer.js"></script>
</body>
</html>`;
