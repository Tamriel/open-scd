/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["subnetwork-editor with child GSE elements looks like the latest snapshot"] = 
`<action-pane label="StationBus — desc
    (8-MMS — 100.0 b/s)">
  <abbr
    slot="action"
    title="[edit]"
  >
    <mwc-icon-button icon="edit">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    title="[remove]"
  >
    <mwc-icon-button icon="delete">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    title="[add]"
  >
    <mwc-icon-button icon="playlist_add">
    </mwc-icon-button>
  </abbr>
  <div id="iedContainer">
    <action-pane
      id="iedSection"
      label="GOOSE_Publisher"
    >
      <connectedap-editor>
      </connectedap-editor>
      <connectedap-editor class="disabled">
      </connectedap-editor>
      <gse-editor>
      </gse-editor>
      <gse-editor class="disabled">
      </gse-editor>
    </action-pane>
  </div>
</action-pane>
`;
/* end snapshot subnetwork-editor with child GSE elements looks like the latest snapshot */

snapshots["subnetwork-editor with child SMV elements looks like the latest snapshot"] = 
`<action-pane label="ProcessBus1 
    (8-MMS — 100 b/s)">
  <abbr
    slot="action"
    title="[edit]"
  >
    <mwc-icon-button icon="edit">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    title="[remove]"
  >
    <mwc-icon-button icon="delete">
    </mwc-icon-button>
  </abbr>
  <abbr
    slot="action"
    title="[add]"
  >
    <mwc-icon-button icon="playlist_add">
    </mwc-icon-button>
  </abbr>
  <div id="iedContainer">
    <action-pane
      id="iedSection"
      label="GOOSE_Publisher"
    >
      <connectedap-editor class="disabled">
      </connectedap-editor>
      <connectedap-editor>
      </connectedap-editor>
      <gse-editor class="disabled">
      </gse-editor>
      <gse-editor>
      </gse-editor>
    </action-pane>
    <action-pane
      id="iedSection"
      label="SMV_Publisher"
    >
      <connectedap-editor>
      </connectedap-editor>
      <connectedap-editor class="disabled">
      </connectedap-editor>
      <smv-editor>
      </smv-editor>
      <smv-editor class="disabled">
      </smv-editor>
      <smv-editor class="disabled">
      </smv-editor>
    </action-pane>
  </div>
</action-pane>
`;
/* end snapshot subnetwork-editor with child SMV elements looks like the latest snapshot */

snapshots["subnetwork-editor move GSE/SMV dialog behavior opens the move dialog on request-gse-move event"] = 
`<mwc-dialog
  heading="Select New ConnectedAP"
  id="moveDialog"
>
  <mwc-list>
    <mwc-list-item
      aria-disabled="true"
      disabled=""
      mwc-list-item=""
      tabindex="0"
    >
      GOOSE_Publisher >
                AP1
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      mwc-list-item=""
      tabindex="-1"
    >
      GOOSE_Publisher >
                AP2
    </mwc-list-item>
  </mwc-list>
  <mwc-button
    disabled=""
    icon="save"
    slot="primaryAction"
  >
    [save]
  </mwc-button>
  <mwc-button
    dialogaction="close"
    slot="secondaryAction"
    style="--mdc-theme-primary: var(--mdc-theme-error)"
  >
    [close]
  </mwc-button>
</mwc-dialog>
`;
/* end snapshot subnetwork-editor move GSE/SMV dialog behavior opens the move dialog on request-gse-move event */

