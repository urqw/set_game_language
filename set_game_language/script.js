// The file encoding is Windows-1251

/**
 * Copyright (C) 2024 Nikita Tseykovets <tseikovets@rambler.ru>
 * Copyright (C) 2015, 2016 Akela <akela88@bk.ru>
 *     (UrqW project from which part of code is borrowed)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

var
	// Area of text output
	textfield_lang = 'en',
	// Area of buttons
	buttons_lang = textfield_lang,
	// Area of input
	input_lang = textfield_lang,
	// Area of inventory
	inventory_lang = textfield_lang;

var
	textfield_element = document.getElementById('textfield'),
	buttons_element = document.getElementById('buttons'),
	input_element = document.getElementById('input'),
	inventory_element = document.getElementById('inventory');

var default_lang = document.getElementsByTagName('HTML')[0].getAttribute('lang');

textfield_element.setAttribute('lang', textfield_lang);
buttons_element.setAttribute('lang', buttons_lang);
input_element.setAttribute('lang', input_lang);
// Restore default language for OK button in input area
document.getElementById('input_enter').setAttribute('lang', default_lang);
inventory_element.setAttribute('lang', inventory_lang);

/**
 * Modifying inventory drawing function
 * from UrqW (/js/Client.js)
 * to restore default language for empty inventory item
 */
Client.prototype.drawInventory = function () {
	var me = this;
	this.crtlInventory.empty();
	this.crtlInventory.append(this.drawItem('inv', 1));

	// Update list of items
	$.each(Game.items, function(itemName, quantity) {
		me.crtlInventory.append(me.drawItem(itemName, quantity));
	});

	if (this.crtlInventory.find('> li').length == 0) {
		this.crtlInventory.append('<li lang="'+default_lang+'"><a href="#" class="item_use">(Пусто)</a></li>');
	}
};
