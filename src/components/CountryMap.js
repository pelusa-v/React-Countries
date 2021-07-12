import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import map from "@amcharts/amcharts4-geodata/worldHigh";


import './styles/Map.css';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryId: this.props.countryId,
        };
    }
    
    componentDidMount() {
                    /**
         * ---------------------------------------
         * This demo was created using amCharts 4.
         *
         * For more information visit:
         * https://www.amcharts.com/
         *
         * Documentation is available at:
         * https://www.amcharts.com/docs/v4/
         * ---------------------------------------
         */

        am4core.useTheme(am4themes_animated);

        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition (am4geodata_worldHigh)
        chart.geodata = map;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Exclude Antartica
        polygonSeries.exclude = ["AQ"];

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#F1E4F4");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#E081EF");

        // Create active state
        var as = polygonTemplate.states.create("active");
        as.properties.fill = am4core.color("#CD41E3");

        let countryId = this.state.countryId

        chart.events.on("ready", function(ev) {
            var country = polygonSeries.getPolygonById(countryId);

            console.log('SEE HERE!!!!!!!!!!!!!!!!!!!!!!')
            console.log(country);
            
            // Pre-zoom
            
            // Set active state
            setTimeout(function() {
                chart.zoomToMapObject(country);
                country.isActive = true;
            }, 1000);
        });
    }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div class="Map__container">
                <div id="chartdiv"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Map;