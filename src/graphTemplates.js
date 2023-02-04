const graphWidgetLayout = ()=> `
    <div class="graph-widget mdl-shadow--4dp">
        <div class="header mdl-grid mdl-shadow--3dp">
            <div class="mdl-cell mdl-cell--5-col mdl-cell--middle">
                <button name="zoomInButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">zoom_in</i></button>
                <button name="resetZoomButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">reset_tv</i></button>
                <button name="zoomOutButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">zoom_out</i></button>            
                <button name="panLeftButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">arrow_back</i></button>
                <!--<button name="panHorizontalCenterButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">align_horizontal_center</i></button>--!>
                <button name="panRightButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">arrow_forward</i></button>
                <button name="panCenterButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">center_focus_strong</i></button>
                <button name="panUpButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">arrow_upward</i></button>
                <!--<button name="panVerticalCenterButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">align_vertical_center</i></button>--!>
                <button name="panDownButton" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">arrow_downward</i></button>
            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--middle">
                <input name="linkDistanceSlider" class="mdl-slider mdl-js-slider" type="range" min="50" max="1000" step="50" value="75"/>
                <input name="nodeCollideSlider" class="mdl-slider mdl-js-slider" type="range" min="50" max="500" step="10" value="75"/>
            </div>
            <div class="mdl-cell mdl-cell--5-col mdl-cell--middle mdl-typography--text-right">
                <label class="mdl-icon-toggle mdl-js-icon-toggle" for="mutualRelationshipSwitch">
                  <input type="checkbox" id="mutualRelationshipSwitch" class="mdl-icon-toggle__input">
                  <i class="mdl-icon-toggle__label material-icons">sync_alt</i>
                </label>
                <button id="graphWidgetMenu" class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">more_vert</i></button>
                <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="graphWidgetMenu">
                    <li class="mdl-menu__item">Menu Item 1</li>
                    <li class="mdl-menu__item">Menu Item 2</li>
                    <li class="mdl-menu__item">Menu Item 3</li>
                </ul>
            </div>
        </div> 
        <svg class="canvas"></svg>
        <div class="footer mdl-shadow--3dp"></div>
    </div>
`;

const graphWidgetFooterOnNodeClicked = (allAgents, selectedAgent)=> `
    <div style="padding: 20px">
        <div>All Agents: ${allAgents.join(', ')}</div>                        
        <div>Selected Agent: ${selectedAgent}</div> 
    </div>
`;

const graphWidgetFooterOnLinkClicked = (allAgents, sourceName, targetName)=> `
    <div style="padding: 20px">
        <div>All Agents: ${allAgents.join(', ')}</div>
        <div>Selected Relationship: ${sourceName}->${targetName}</div>
    </div>
`;