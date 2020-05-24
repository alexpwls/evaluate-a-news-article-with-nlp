import { sourceSelector } from './js/sourceSelector'
import { checkForName } from './js/nameChecker'
import { textHandleSubmit } from './js/textFormHandler'
import { urlHandleSubmit } from './js/urlFormHandler'
import { randomArticle } from './js/randomArticle'

import './styles/resets.scss'
import './styles/design-system.scss'
import './styles/main.scss'

import logoIcon from './images/logo.png';

var logoImg = document.querySelector('.logo');
logoImg.src = logoIcon;

var logoFooterImg = document.querySelector('.logo-footer');
logoFooterImg.src = logoIcon;

export {
    sourceSelector,
    checkForName,
    textHandleSubmit,
    urlHandleSubmit,
    randomArticle
}