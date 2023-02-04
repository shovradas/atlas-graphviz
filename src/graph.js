"use strict";

// Utils =====================================================================================================
class ColorUtils{
    /**
     * Returns the hex code of a color.
     *
     * @param {String} color The name or hex code of the color.
     * @return {String} The hex code of given color. Returns #000000 if color is not found.
     */
    static getColorAsHex(color) {
        var context = document.createElement('canvas').getContext('2d');
        context.fillStyle = color;
        return context.fillStyle;
    }

    /**
     * Adjusts the brightness of a given color i.e. lighten or darken the color
     *
     * @param {String} color The color name or hex code to adjust.
     * @param {int} amount The amount of brightness or darkness. positive->light, negative->dark
     * @return {String} The hex code of the adjusted color
     */
    static adjustColor(color, amount) {
        color = ColorUtils.getColorAsHex(color);
        let adjustedColorCode = color.replace(/^#/, '')
            .replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount))
                .toString(16))
                .substr(-2));
        return `#${adjustedColorCode}`;
    }

    /**
     * Determines if given a color is too light
     *
     * @param {String} color The color name or hex code to determine.
     * @return {Boolean} Returns true if the color is too light, false otherwise
     */
    static isTooLight(color) {
        color = ColorUtils.getColorAsHex(color);

        color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
        const r = color >> 16;
        const g = color >> 8 & 255;
        const b = color & 255;
        const hsp = Math.sqrt(0.299 * (r * r) +0.587 * (g * g) +0.114 * (b * b));

        return hsp>236;
    }

    /**
     * Generates color based on the predefined scheme.
     *
     * @yields {String} The next available color in the scheme.
     */
    static * colorScheme() {
        let scheme = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

        for(let round = 0, amount = 0; ;round++){
            amount = round%2==0? amount: round * 10;
            amount *= -1;
            for (let color of scheme) {
                yield this.adjustColor(color, amount);
            }
        }
    }
}

class DateUtils{
    /**
     * Convert a string to JavaScript Date Object
     *
     * @param {String} dateTimeString The give datetime as string. Sample Date => 2022-11-11 16:52:46:057746
     * @return {String} The JavaScript Date Object
     */
    static dateFromString(dateTimeString){ //Sample Date => 2022-11-11 16:52:46:057746
        return new Date(dateTimeString); // TODO: Need to Check
        const [date, time] = dateTimeString.split(" ");
        const [year, month, day] = date.split("-");
        const [hours, minutes, seconds, milliseconds] = time.split(":");
        return new Date(year, month, day, hours, minutes, seconds, milliseconds);
    }
}

// Data ======================================================================================================
class Node{
    constructor(id, name, fill, {stroke=ColorUtils.adjustColor(fill, -50), textFill="white"} = {}){
        this.id = id;
        this.name = name;
        this.fill = fill;
        this.stroke = stroke;
        this.textFill = textFill;
    }
}

class Link{
    constructor(source, target, {stroke="black", dateTime="", trustValue=0.0, resourceId="", execTime=""} = {}){
        this.source = source;
        this.target = target;
        this.stroke = stroke;
        this.dateTime = dateTime;
        this.trustValue = trustValue;
        this.resourceId = resourceId;
        this.execTime = execTime;
    }
}

class Graph{
    constructor(){
        this.nodes = [];
        this.links = [];
    }

    addNode(node){
        if(ColorUtils.isTooLight(node.fill)) node.textFill = node.stroke;
        this.nodes.push(node);
    }

    addLink(link){
        const node = this.nodes.find(node => node.id == link.source)
        link.stroke = node.stroke;
        this.links.push(link);
    }

    asJSObject(){
        return JSON.parse(JSON.stringify(this));
    }
}

class DataFormatter{
    constructor(scenarioResult){
        this.scenarioResult = scenarioResult;
    }

    getGraph(){
        if(this.scenarioResult == null) return this.getDummyGraph();

        const graph = new Graph();
        const colorScheme = ColorUtils.colorScheme();

        // Preparing nodes
        const agents = Object.keys(this.scenarioResult.agentsLog);
        for(let agent of agents){
            graph.addNode(new Node(agent, agent, colorScheme.next().value));
        }

        // Preparing links
        for(let row of this.scenarioResult.trustLog){
            row.date_time = DateUtils.dateFromString(row.date_time);

            let link = graph.links.find(link => link.source === row.agent && link.target === row.other_agent);

            if(!link) {
                graph.addLink(new Link(row.agent, row.other_agent, {dateTime: row.date_time, trustValue: row.trust_value, resourceId: row.resource_id, execTime: row.exec_time}));
            } else if(link.dateTime < row.date_time){
                link.dateTime = row.date_time;
                link.trustValue = row.trust_value;
                link.resourceId = row.resource_id;
                link.execTime = row.exec_time;
            }
        }
        // returning Graph object as plain JavaScript Object as required by d3.js
        return graph.asJSObject();
    }

    getDummyGraph(){
        const graph = new Graph();
        const colorScheme = ColorUtils.colorScheme();

        graph.addNode(new Node(10, "A", colorScheme.next().value));
        graph.addNode(new Node(11, "B", colorScheme.next().value));
        graph.addNode(new Node(12, "C", colorScheme.next().value));
        graph.addNode(new Node(13, "D", colorScheme.next().value));
        graph.addNode(new Node(14, "E", colorScheme.next().value));
        graph.addNode(new Node(15, "F", colorScheme.next().value));
        graph.addNode(new Node(16, "G", colorScheme.next().value));
        graph.addNode(new Node(17, "H", colorScheme.next().value));
        graph.addNode(new Node(18, "I", colorScheme.next().value));
        graph.addNode(new Node(19, "J", colorScheme.next().value));

        graph.addLink(new Link(11, 10));
        graph.addLink(new Link(10, 11));
        graph.addLink(new Link(12, 10));
        graph.addLink(new Link(13, 10));
        graph.addLink(new Link(14, 10));
        graph.addLink(new Link(15, 10));
        graph.addLink(new Link(16, 10));
        graph.addLink(new Link(17, 11));
        graph.addLink(new Link(18, 11));
        graph.addLink(new Link(19, 11));
        graph.addLink(new Link(13, 18));
        graph.addLink(new Link(11, 16));
        graph.addLink(new Link(11, 14));

        // returning Graph object as plain JavaScript Object as required by d3.js
        return graph.asJSObject();
    }
}

// Visualization =============================================================================================
class GraphWidget{
    constructor(parent=d3.select("body"), settings={}){
        this.parent = parent;
        this.settings = settings;

        this.graph = null;
        this.template = null;
        this.simulation = null;

        this.initSettings();
    }

    static getArrowHeadIdByColor(color){
        return `arrowHead${ColorUtils.getColorAsHex(color).slice(1)}`;
    }

    initSettings(){
        const defaultSettings = {
            disabledNodeFill: "#e8e8e8",
            disabledNodeStroke: ColorUtils.adjustColor("#e8e8e8", -15),
            disabledNodeTextFill: ColorUtils.adjustColor("#e8e8e8", -35),
            disabledLinkStroke: "transparent"
        }

        for(let [key, value] of Object.entries(defaultSettings)){
            if(!this.settings.hasOwnProperty(key))
                this.settings[key] = value;
        }
    }

    initTemplate(){
        const content = graphWidgetLayout();
        this.template = this.parent.html(content);
        //this.template = d3.create("div").attr("class", "widget mdl-shadow--4dp").html(content);
    }

    initSimulation(){
        this.simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(d=>d.id))
            .force("center", d3.forceCenter().strength(1))
            .force("charge", d3.forceManyBody().strength(-30))
            .force("collide", d3.forceCollide().strength(1))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            .stop();
    }

    updateSimulation(){
        if(this.simulation){
            this.simulation.stop();
            const header = this.template.select(".header");
            const linkDistance = +header.select("input[name='linkDistanceSlider']").attr("value");
            const nodeCollideRadius = +header.select("input[name='nodeCollideSlider']").attr("value");

            const svg = this.template.select("svg");
            const width = +svg.property("clientWidth");
            const height = +svg.property("clientHeight");

            this.simulation.nodes(this.graph.nodes);
            this.simulation.force("link").links(this.graph.links).distance(linkDistance);
            this.simulation.force("center").x(width/2).y(height/2);
            this.simulation.force("collide").radius(nodeCollideRadius);
        }
    }

    populateCanvas(){
        const widget = this;
        const svg = this.template.select("svg");

        svg.selectAll("*").remove();

        addArrowHeads();
        addLinks();
        addNodes();

        function defineArrowHead(defs, color, {id = GraphWidget.getArrowHeadIdByColor(color)} = {}) {
            defs.append("marker")
                .attr("id", id)
                .attr("viewBox", "0 0 10 10")
                .attr("refX", 23)
                .attr("refY", 4)
                .attr("markerWidth", 5)
                .attr("markerHeight", 5)
                .attr("markerUnits", "strokeWidth")
                .attr("orient", "auto")
                .attr("fill", color)
                .insert("polygon")
                .attr("points", "0,0 10,5 0,10 2,6 2,4")
                .attr("transform", d => "rotate(-4)")
        }

        function addArrowHeads(){
            const defs = svg.append("defs");

            let uniqueColors = [];
            for(let link of widget.graph.links){
                let color = link.stroke;
                if(!uniqueColors.includes(color)){
                    defineArrowHead(defs, color);   // ArrowHead for distinct links' color
                    uniqueColors.push(color);
                }
            }
            defineArrowHead(defs, widget.settings.disabledLinkStroke, {id: "arrowHeadDisabled"});    // Disabled ArrowHead
        }

        function addNodes({ radius = 20, strokeWidth = 3 } = {}) {
            // Group of nodes
            svg.append("g")
                .attr("class", "nodes")                         // Further style can be modified through CSS
                .selectAll("g")
                .data(widget.graph.nodes)
                .enter()
                .append("g")                                    // Node is a group of circle and text
                .attr("class", "node")                          // Further style can be modified through CSS
                .append("circle")                               // Circle for each group
                .attr("r", radius)
                .attr("fill", node => node.fill)
                .attr("stroke", node => node.stroke)
                .attr("stroke-width", strokeWidth)
                .attr("class", "circle")                        // Further style can be modified through CSS
                .select(function(){return this.parentNode})
                .append("text")                                 // Text for each group
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .text(node => node.name)
                .attr("fill", node => node.textFill)
                .attr("font-weight", "bold")
                .attr("class", "circle-text")                   // Further style can be modified through CSS
                .select(function(){return this.parentNode});
        }

        function addLinks({ strokeWidth = 3 } = {}) {
            // Group of paths as links
            svg.append('g')
                .attr("class", "links")
                .selectAll("path")
                .data(widget.graph.links)
                .enter()
                .append("path")
                .attr("class", "link")
                .attr("fill", "transparent")
                .attr("stroke", link => link.stroke)
                .attr("stroke-width", strokeWidth)
                .attr("marker-end", link => `url(#${GraphWidget.getArrowHeadIdByColor(link.stroke)})`);
        }
    }

    attachEventHandlers(){
        const widget = this;
        const header= this.template.select(".header");
        const svg = this.template.select("svg");
        const footer = this.template.select(".footer");

        // Header controls
        const zoomInButton = header.select("button[name='zoomInButton']");
        const resetZoomButton = header.select("button[name='resetZoomButton']");
        const zoomOutButton = header.select("button[name='zoomOutButton']");
        const panLeftButton = header.select("button[name='panLeftButton']");
        const panRightButton = header.select("button[name='panRightButton']");
        const panCenterButton = header.select("button[name='panCenterButton']");
        const panUpButton = header.select("button[name='panUpButton']");
        const panDownButton = header.select("button[name='panDownButton']");
        const linkDistanceSlider = header.select("input[name='linkDistanceSlider']");
        const nodeCollideSlider = header.select("input[name='nodeCollideSlider']");
        const mutualRelationshipSwitch = header.select("#mutualRelationshipSwitch");

        // SVG elements
        const nodes = svg.selectAll(".node");
        const links = svg.selectAll(".link");

        const allAgents = nodes.data().map(node=>node.name);
        const width = +svg.property("clientWidth");
        const height = +svg.property("clientHeight");

        const zoomed = onZoom();

        // Simulation events
        this.simulation.on("tick", ticked);

        // SVG Events
        svg.call(zoomed);
        // svg.on("click", (e) => { if(e.target.tagName === "svg") reset(nodes, links) });
        nodes.call(d3.drag().on("start", dragStarted).on("drag", dragged).on("end", dragEnded));
        nodes.on("click", onNodeClick).on("mouseover", onNodeMouseOver).on("mouseout", onNodeOrLinkMouseOut);
        links.on("click", onLinkClick).on("mouseover", onLinkMouseOver).on("mouseout", onNodeOrLinkMouseOut);

        // Control events
        zoomInButton.on("click", () => { svg.transition().call(zoomed.scaleBy, 2) });
        resetZoomButton.on("click", () => { svg.transition().call(zoomed.scaleTo, 1) });
        zoomOutButton.on("click", () => { svg.transition().call(zoomed.scaleBy, 0.5) });
        panLeftButton.on("click", () => { svg.transition().call(zoomed.translateBy, -width / 10, 0) });

        panRightButton.on("click", () => { svg.transition().call(zoomed.translateBy, width / 10, 0) });
        panCenterButton.on("click", () => { svg.transition().call(zoomed.translateTo, width / 2, height / 2) });
        panUpButton.on("click", () => { svg.transition().call(zoomed.translateBy, 0, -height / 10) });
        panDownButton.on("click", () => { svg.transition().call(zoomed.translateBy, 0, height / 10) });
        linkDistanceSlider.on("change", onLinkDistanceSliderValueChanged);
        nodeCollideSlider.on("change", onNodeCollideSliderValueChanged);

        // Simulation event handlers
        function ticked() {
            nodes.attr("transform", d => `translate(${d.x}, ${d.y})`);
            links.attr("d", d => {
                let dx = d.source.x - d.target.x;
                let dy = d.source.y - d.target.y;
                let dr = Math.sqrt(dx * dx + dy * dy);

                return `M${d.source.x},${d.source.y} A${dr * 2},${dr * 2} 0 0,1 ${d.target.x},${d.target.y}`;
            });
        }

        // SVG events handlers
        function onZoom(){
            return d3.zoom()
                .scaleExtent([0.125, 8])
                .on("zoom", ({transform}) => {
                    svg.select(".nodes").attr("transform", transform);
                    svg.select(".links").attr("transform", transform);
                });
        }

        function dragStarted(e) {
            if (!e.active) widget.simulation.alphaTarget(0.3).restart();
            e.subject.fx = e.subject.x;
            e.subject.fy = e.subject.y;
        }

        function dragged(e) {
            e.subject.fx = e.x;
            e.subject.fy = e.y;
        }

        function dragEnded(e) {
            if (!e.active) widget.simulation.alphaTarget(0);
            e.subject.fx = null;
            e.subject.fy = null;
        }

        function onNodeClick(e, d){
            const content = graphWidgetFooterOnNodeClicked(allAgents, d.name)
            footer.html(content);
        }

        function onNodeMouseOver(e, d){
            const showMutual = mutualRelationshipSwitch.property("checked");
            const connectedNodes = links.data().filter(link=>link.source.id === d.id).map(link=>link.target.id);

            links
                .attr("stroke", link => link.source.id === d.id || (showMutual && link.target.id === d.id && connectedNodes.includes(link.source.id)) ? link.stroke: widget.settings.disabledLinkStroke)
                .attr("marker-end", link => link.source.id === d.id || (showMutual && link.target.id === d.id && connectedNodes.includes(link.source.id)) ? `url(#${GraphWidget.getArrowHeadIdByColor(link.stroke)})` : "url(#arrowHeadDisabled)")
                .style("cursor", "pointer");

            nodes.select("circle")
                .attr("fill", node => node.id === d.id || connectedNodes.includes(node.id) ? node.fill : widget.settings.disabledNodeFill)
                .attr("stroke", node => node.id === d.id || connectedNodes.includes(node.id) ? node.stroke : widget.settings.disabledNodeStroke)
                .style("cursor", "pointer")
                .select(function(){return this.parentNode})
                .select("text")
                .attr("fill", node => node.id === d.id || connectedNodes.includes(node.id) ? node.textFill : widget.settings.disabledNodeTextFill)
                .style("cursor", "pointer");
        }

        function onLinkClick(e, d){
            const content = graphWidgetFooterOnLinkClicked(allAgents, d.source.name, d.target.name)
            footer.html(content);
        }

        function onLinkMouseOver(e, d) {
            nodes.select("circle")
                .attr('fill', node => node.id === d.source.id || node.id === d.target.id ? node.fill : widget.settings.disabledNodeFill)
                .attr("stroke", node => node.id === d.source.id || node.id === d.target.id ? node.stroke : widget.settings.disabledNodeStroke)
                .select(function(){return this.parentNode})
                .select("text")
                .attr("fill", node => node.id === d.source.id || node.id === d.target.id ? node.textFill : widget.settings.disabledNodeTextFill)

            links
                .attr("stroke", link => link.source.id === d.source.id && link.target.id === d.target.id ? link.stroke : widget.settings.disabledLinkStroke)
                .attr("marker-end", link => link.source.id === d.source.id && link.target.id === d.target.id ? `url(#${GraphWidget.getArrowHeadIdByColor(link.stroke)})` : "url(#arrowHeadDisabled)")
                .style("cursor", "pointer");
        }

        function onNodeOrLinkMouseOut(e, d){
            nodes.select("circle")
                .attr("fill", node => node.fill)
                .attr("stroke", node => node.stroke)
                .select(function(){return this.parentNode})
                .select("text")
                .attr("fill", node => node.textFill)
            links
                .attr("stroke", link => link.stroke)
                .attr("marker-end", link => `url(#${GraphWidget.getArrowHeadIdByColor(link.stroke)})`)
        }

        // Control events handlers
        function onLinkDistanceSliderValueChanged(e){
            widget.simulation.force("link").distance(e.target.value);
            widget.simulation.alpha(0.3).restart();
        }

        function onNodeCollideSliderValueChanged(e){
            widget.simulation.force("collide").radius(e.target.value);
            widget.simulation.alpha(0.3).restart();
        }
    }

    render(){
        if(this.graph){
            this.template ?? this.initTemplate();
            this.populateCanvas();
            this.simulation ?? this.initSimulation();
            this.updateSimulation();
            this.attachEventHandlers();

            this.simulation.alpha(0.3).restart(); // Need to update in trustlab
        }
    }

    setGraph(graph){
        this.graph = graph;
    }
}

// Main ======================================================================================================
class GraphViewer{
    static widget = null;

    static show(graphContainerId, scenarioResult){
        const container = d3.select(`#${graphContainerId}`);
        const graph = new DataFormatter(scenarioResult).getGraph();

        GraphViewer.widget = GraphViewer.widget ?? new GraphWidget(container);
        GraphViewer.widget.setGraph(graph);
        GraphViewer.widget.render();
    };

    static reset(graphContainerId){
        d3.select(`#${graphContainerId}`).selectAll("*").remove();
        GraphViewer.widget = null;
    }
}