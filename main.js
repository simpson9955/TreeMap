/** @format */

let colors = [
	"#e6194b",
	"#3cb44b",
	"#ffe119",
	"#4363d8",
	"#f58231",
	"#911eb4",
	"#46f0f0",
	"#f032e6",
	"#bcf60c",
	"#fabebe",
	"#008080",
	"#e6beff",
	"#9a6324",
	"#fffac8",
	"#800000",
	"#aaffc3",
	"#808000",
	"#ffd8b1",
	"#000075",
	"#808080",
	"#ffffff",
];

let DATA =
	"https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json";

fetch(DATA)
	.then((data) => data.json())
	.then((jsonData) => {
		var w = 1000,
			h = 600;

		let keys = [...new Set(jsonData.children.map((object) => object.name))];

		let colorScale = d3.scaleOrdinal().domain(keys).range(colors);
	});
