/**
 * DOM Element selection jQuery's style
 * @param {string} selector css selector of a DOM Element
 */
const $ = (selector) => {
    let elements = document.querySelectorAll(selector)
    return elements.length === 1 ? elements[0] : elements
}