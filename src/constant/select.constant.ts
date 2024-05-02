/**
 * 
 * This file contains the constant values for the select component of Material UI
 * @constant ITEM_HEIGHT - The height of the item
 * @constant ITEM_PADDING_TOP - The padding top of the item
 * @constant MenuProps - The props of the menu
 * 
 */

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}