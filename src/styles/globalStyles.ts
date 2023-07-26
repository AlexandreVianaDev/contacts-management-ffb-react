import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{

    :root{
    --color-primary: #202F5A;
    --color-secondary: #2862A5;
    --color-terciary: #6675A0;

    --grey-100: #FFFFFF;
    --grey-90: #D3D5D6;
    --grey-70: #8E8E8E;
    --grey-50: rgba(0,0,0,0.5);
    --grey-40: rgba(0, 0, 0, 0.6);
    --grey-20: rgba(0, 0, 0, 0.8);
    --grey-0: #000000;

    --negative-feedback: #E60000;
    --positive-feedback: #168821;


    --title-1: 2rem;

    --linkRegister-fontSize: 1.5rem;
    --input-fontSize: 1.5rem;
    --body: 1.5rem;
    --headLine: 1.375rem;
    --inputText: 1rem;

    --text-1: 1rem;
    --text-2: 0.8rem;
    --text-3: 0.6rem

    --btn-fontSize: 1.3rem;

    --Bold: 600;
    --Medium: 500;
    --Regular: 400;

    --radius-default: 8px;

    }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    list-style: none;

}
}


body{
    background-color: var(--grey-100);
    font-family: "Inter", sans-serif;
}
button{
    cursor: pointer;
}
* {
    font-family: "Inter", sans-serif;
}

`;
