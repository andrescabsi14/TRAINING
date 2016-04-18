/**
 * Notes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		title: {
			type: 'string'
		},
		content: {
			type: 'longtext'
		},
		creationDate: {
			type: 'date'
		},
		hWord: {
			type: 'mediumtext'
		},
		category: {
			type: 'array'
		},
		archived: {
			type: 'boolean'
		},
		latitude: {
			type: 'float'
		},
		longitude: {
			type: 'float'
		},
		tags: {
			type: 'array'
		}
	}
};

