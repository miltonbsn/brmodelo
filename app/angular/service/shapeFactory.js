import angular from "angular";
import shapes from "../../joint/shapes"

const shapeFactory = function () {

	const createEntity = (customConfig) => {
		return new shapes.Entity(customConfig);
	};

	const createRelationship = (customConfig) => {
		return new shapes.Relationship(customConfig);
	};

	const createIsa = (customConfig) => {
		return new shapes.Isa(customConfig);
	};

	const createAssociative = (customConfig) => {
		return new shapes.Associative(customConfig)
	};

	const createAttribute = (customConfig) => {
		return new shapes.Attribute(customConfig);
	};

	const createKey = (customConfig) => {
		return new shapes.Key(customConfig);
	};

	const _createBlockAssociative = function () {
		return new erd.BlockAssociative({
			size: {
				width: 100,
				height: 50,
			},
			attrs: {
				".outer": {
					fill: "transparent",
					stroke: "black",
				},
			},
		});
	};

	const createComposedAttribute = function () {
		return new erd.ComposedAttribute({
			size: {
				width: 60,
				height: 60,
			},
			position: {
				x: 20,
				y: 320,
			},
			attrs: {
				image: { "xlink:href": "../../assets/img/composto-01.png" },
			},
		});
	};

	const createLink = (customConfig) => {
		return new shapes.Link(customConfig);
	};

	return {
		createEntity,
		createAttribute,
		createIsa,
		createRelationship,
		createKey,
		createLink,
		createAssociative,
		//createComposedAttribute: _createComposedAttribute,
	};
};

export default angular
	.module("app.shapeFactory", [])
	.factory("ShapeFactory", shapeFactory).name;
