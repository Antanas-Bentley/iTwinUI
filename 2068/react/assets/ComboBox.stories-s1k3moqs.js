import{r as v,B as m,c as S,V as h,j as l,R as u}from"./index-vgP8bFIz.js";import{S as g}from"./Camera-D_19fmzI.js";import{C as t,I as M,S as C}from"./InputGrid-DrK3hkrx.js";import{L as I}from"./Label-CMf6sI9L.js";import{M as A}from"./Menu-CfuoIR3e.js";import"./Input-CWEhGyQQ.js";import"./Textarea-BEFJA5oV.js";import"./Icon-POEIFJ1c.js";import"./InputWithDecorations-m_omyK8m.js";import"./InputFlexContainer-DtSLebM1.js";import"./MenuExtraContent-BN_n4i_d.js";import"./Select-DEWOqJDL.js";import"./Popover-B2DrQss5.js";import"./List-DOqXShwW.js";import"./SvgCheckmark-BuyEiyjZ.js";import"./SvgCaretDownSmall-sUFjg8K6.js";import"./Text-CyMrpsH0.js";import"./useContainerWidth-CLZOf4cy.js";import"./VirtualScroll-OXMxfKXR.js";import"./ListItem-B9y7liFf.js";import"./LinkAction-B8Nk11Ed.js";import"./focusable-DQv_vybo.js";const y=v.forwardRef((e,a)=>{const{hasSublabel:n,hasIcon:s,contentWidth:o,translatedStrings:b={loading:"Loading…"},className:d,style:c,...r}=e;return v.createElement(m,{className:S("iui-menu-item-skeleton",d),"data-iui-size":n&&"large",style:{"--iui-menu-item-content-skeleton-max-width":o,...c},ref:a,...r},s&&v.createElement(m,{className:"iui-icon iui-skeleton","aria-hidden":!0}),v.createElement(m,{as:"span",className:"iui-content"},v.createElement(m,{className:"iui-menu-label iui-skeleton","aria-hidden":!0}),n&&v.createElement(m,{className:"iui-menu-description iui-skeleton","aria-hidden":!0}),v.createElement(h,null,b.loading)))}),J={decorators:[e=>l.jsx("div",{style:{maxWidth:"clamp(300px, 50%, 100%)",minHeight:380},children:l.jsx(e,{})})],title:"ComboBox"},i=[{label:"Afghanistan",value:"AF"},{label:"Åland Islands",value:"AX"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"American Samoa",value:"AS"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Anguilla",value:"AI"},{label:"Antarctica",value:"AQ"},{label:"Antigua and Barbuda",value:"AG"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Aruba",value:"AW"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"},{label:"Bahamas",value:"BS"},{label:"Bahrain",value:"BH"},{label:"Bangladesh",value:"BD"},{label:"Barbados",value:"BB"},{label:"Belarus",value:"BY"},{label:"Belgium",value:"BE"},{label:"Belize",value:"BZ"},{label:"Benin",value:"BJ"},{label:"Bermuda",value:"BM"},{label:"Bhutan",value:"BT"},{label:"Bolivia",value:"BO"},{label:"Bosnia and Herzegovina",value:"BA"},{label:"Botswana",value:"BW"},{label:"Bouvet Island",value:"BV"},{label:"Brazil",value:"BR"},{label:"British Indian Ocean Territory",value:"IO"},{label:"Brunei Darussalam",value:"BN"},{label:"Bulgaria",value:"BG"},{label:"Burkina Faso",value:"BF"},{label:"Burundi",value:"BI"},{label:"Cambodia",value:"KH"},{label:"Cameroon",value:"CM"},{label:"Canada",value:"CA"},{label:"Cape Verde",value:"CV"},{label:"Cayman Islands",value:"KY"},{label:"Central African Republic",value:"CF"},{label:"Chad",value:"TD"},{label:"Chile",value:"CL"},{label:"China",value:"CN"},{label:"Christmas Island",value:"CX"},{label:"Cocos (Keeling) Islands",value:"CC"},{label:"Colombia",value:"CO"},{label:"Comoros",value:"KM"},{label:"Congo",value:"CG"},{label:"Congo, The Democratic Republic of the",value:"CD"},{label:"Cook Islands",value:"CK"},{label:"Costa Rica",value:"CR"},{label:"Cote D'Ivoire",value:"CI"},{label:"Croatia",value:"HR"},{label:"Cuba",value:"CU"},{label:"Cyprus",value:"CY"},{label:"Czech Republic",value:"CZ"},{label:"Denmark",value:"DK"},{label:"Djibouti",value:"DJ"},{label:"Dominica",value:"DM"},{label:"Dominican Republic",value:"DO"},{label:"Ecuador",value:"EC"},{label:"Egypt",value:"EG"},{label:"El Salvador",value:"SV"},{label:"Equatorial Guinea",value:"GQ"},{label:"Eritrea",value:"ER"},{label:"Estonia",value:"EE"},{label:"Ethiopia",value:"ET"},{label:"Falkland Islands (Malvinas)",value:"FK"},{label:"Faroe Islands",value:"FO"},{label:"Fiji",value:"FJ"},{label:"Finland",value:"FI"},{label:"France",value:"FR"},{label:"French Guiana",value:"GF"},{label:"French Polynesia",value:"PF"},{label:"French Southern Territories",value:"TF"},{label:"Gabon",value:"GA"},{label:"Gambia",value:"GM"},{label:"Georgia",value:"GE"},{label:"Germany",value:"DE"},{label:"Ghana",value:"GH"},{label:"Gibraltar",value:"GI"},{label:"Greece",value:"GR"},{label:"Greenland",value:"GL"},{label:"Grenada",value:"GD"},{label:"Guadeloupe",value:"GP"},{label:"Guam",value:"GU"},{label:"Guatemala",value:"GT"},{label:"Guernsey",value:"GG"},{label:"Guinea",value:"GN"},{label:"Guinea-Bissau",value:"GW"},{label:"Guyana",value:"GY"},{label:"Haiti",value:"HT"},{label:"Heard Island and Mcdonald Islands",value:"HM"},{label:"Holy See (Vatican City State)",value:"VA"},{label:"Honduras",value:"HN"},{label:"Hong Kong",value:"HK"},{label:"Hungary",value:"HU"},{label:"Iceland",value:"IS"},{label:"India",value:"IN"},{label:"Indonesia",value:"ID"},{label:"Iran, Islamic Republic Of",value:"IR"},{label:"Iraq",value:"IQ"},{label:"Ireland",value:"IE"},{label:"Isle of Man",value:"IM"},{label:"Israel",value:"IL"},{label:"Italy",value:"IT"},{label:"Jamaica",value:"JM"},{label:"Japan",value:"JP"},{label:"Jersey",value:"JE"},{label:"Jordan",value:"JO"},{label:"Kazakhstan",value:"KZ"},{label:"Kenya",value:"KE"},{label:"Kiribati",value:"KI"},{label:"Korea, Democratic People'S Republic of",value:"KP"},{label:"Korea, Republic of",value:"KR"},{label:"Kuwait",value:"KW"},{label:"Kyrgyzstan",value:"KG"},{label:"Lao People'S Democratic Republic",value:"LA"},{label:"Latvia",value:"LV"},{label:"Lebanon",value:"LB"},{label:"Lesotho",value:"LS"},{label:"Liberia",value:"LR"},{label:"Libyan Arab Jamahiriya",value:"LY"},{label:"Liechtenstein",value:"LI"},{label:"Lithuania",value:"LT"},{label:"Luxembourg",value:"LU"},{label:"Macao",value:"MO"},{label:"Macedonia, The Former Yugoslav Republic of",value:"MK"},{label:"Madagascar",value:"MG"},{label:"Malawi",value:"MW"},{label:"Malaysia",value:"MY"},{label:"Maldives",value:"MV"},{label:"Mali",value:"ML"},{label:"Malta",value:"MT"},{label:"Marshall Islands",value:"MH"},{label:"Martinique",value:"MQ"},{label:"Mauritania",value:"MR"},{label:"Mauritius",value:"MU"},{label:"Mayotte",value:"YT"},{label:"Mexico",value:"MX"},{label:"Micronesia, Federated States of",value:"FM"},{label:"Moldova, Republic of",value:"MD"},{label:"Monaco",value:"MC"},{label:"Mongolia",value:"MN"},{label:"Montserrat",value:"MS"},{label:"Morocco",value:"MA"},{label:"Mozambique",value:"MZ"},{label:"Myanmar",value:"MM"},{label:"Namibia",value:"NA"},{label:"Nauru",value:"NR"},{label:"Nepal",value:"NP"},{label:"Netherlands",value:"NL"},{label:"Netherlands Antilles",value:"AN"},{label:"New Caledonia",value:"NC"},{label:"New Zealand",value:"NZ"},{label:"Nicaragua",value:"NI"},{label:"Niger",value:"NE"},{label:"Nigeria",value:"NG"},{label:"Niue",value:"NU"},{label:"Norfolk Island",value:"NF"},{label:"Northern Mariana Islands",value:"MP"},{label:"Norway",value:"NO"},{label:"Oman",value:"OM"},{label:"Pakistan",value:"PK"},{label:"Palau",value:"PW"},{label:"Palestinian Territory, Occupied",value:"PS"},{label:"Panama",value:"PA"},{label:"Papua New Guinea",value:"PG"},{label:"Paraguay",value:"PY"},{label:"Peru",value:"PE"},{label:"Philippines",value:"PH"},{label:"Pitcairn",value:"PN"},{label:"Poland",value:"PL"},{label:"Portugal",value:"PT"},{label:"Puerto Rico",value:"PR"},{label:"Qatar",value:"QA"},{label:"Reunion",value:"RE"},{label:"Romania",value:"RO"},{label:"Russian Federation",value:"RU"},{label:"RWANDA",value:"RW"},{label:"Saint Helena",value:"SH"},{label:"Saint Kitts and Nevis",value:"KN"},{label:"Saint Lucia",value:"LC"},{label:"Saint Pierre and Miquelon",value:"PM"},{label:"Saint Vincent and the Grenadines",value:"VC"},{label:"Samoa",value:"WS"},{label:"San Marino",value:"SM"},{label:"Sao Tome and Principe",value:"ST"},{label:"Saudi Arabia",value:"SA"},{label:"Senegal",value:"SN"},{label:"Serbia and Montenegro",value:"CS"},{label:"Seychelles",value:"SC"},{label:"Sierra Leone",value:"SL"},{label:"Singapore",value:"SG"},{label:"Slovakia",value:"SK"},{label:"Slovenia",value:"SI"},{label:"Solomon Islands",value:"SB"},{label:"Somalia",value:"SO"},{label:"South Africa",value:"ZA"},{label:"South Georgia and the South Sandwich Islands",value:"GS"},{label:"Spain",value:"ES"},{label:"Sri Lanka",value:"LK"},{label:"Sudan",value:"SD"},{label:"Surilabel",value:"SR"},{label:"Svalbard and Jan Mayen",value:"SJ"},{label:"Swaziland",value:"SZ"},{label:"Sweden",value:"SE"},{label:"Switzerland",value:"CH"},{label:"Syrian Arab Republic",value:"SY"},{label:"Taiwan, Province of China",value:"TW"},{label:"Tajikistan",value:"TJ"},{label:"Tanzania, United Republic of",value:"TZ"},{label:"Thailand",value:"TH"},{label:"Timor-Leste",value:"TL"},{label:"Togo",value:"TG"},{label:"Tokelau",value:"TK"},{label:"Tonga",value:"TO"},{label:"Trinidad and Tobago",value:"TT"},{label:"Tunisia",value:"TN"},{label:"Turkey",value:"TR"},{label:"Turkmenistan",value:"TM"},{label:"Turks and Caicos Islands",value:"TC"},{label:"Tuvalu",value:"TV"},{label:"Uganda",value:"UG"},{label:"Ukraine",value:"UA"},{label:"United Arab Emirates",value:"AE"},{label:"United Kingdom",value:"GB"},{label:"United States",value:"US"},{label:"United States Minor Outlying Islands",value:"UM"},{label:"Uruguay",value:"UY"},{label:"Uzbekistan",value:"UZ"},{label:"Vanuatu",value:"VU"},{label:"Venezuela",value:"VE"},{label:"Viet Nam",value:"VN"},{label:"Virgin Islands, British",value:"VG"},{label:"Virgin Islands, U.S.",value:"VI"},{label:"Wallis and Futuna",value:"WF"},{label:"Western Sahara",value:"EH"},{label:"Yemen",value:"YE"},{label:"Zambia",value:"ZM"},{label:"Zimbabwe",value:"ZW"}],G=async()=>new Promise(e=>{setTimeout(()=>{e(i.map(a=>({...a,sublabel:a.value,icon:l.jsx("img",{loading:"lazy",style:{width:20,height:15},src:`https://flagcdn.com/w20/${a.value.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${a.value.toLowerCase()}.png 2x`,alt:""})})))},2e3)}),Y=()=>{const e=u.useMemo(()=>i,[]);return l.jsx(t,{options:e,inputProps:{placeholder:"Select a country"},onChange:a=>console.log(a??"")})},$=()=>{const e=u.useMemo(()=>i,[]),[a,n]=u.useState("CA");return l.jsx(t,{options:e,inputProps:{placeholder:"Select a country"},value:a,onChange:s=>{console.log(s),n(s)}})},Q=()=>{const e=u.useMemo(()=>i.map((a,n)=>({...a,sublabel:`${a.value}${n%2?" -- disabled":""}`,disabled:n%2!==0,startIcon:l.jsx("img",{loading:"lazy",style:{width:20,height:15},src:`https://flagcdn.com/w20/${a.value.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${a.value.toLowerCase()}.png 2x`,alt:""})})),[]);return l.jsx(t,{options:e,inputProps:{placeholder:"Select a country"},onChange:a=>console.log(a??"")})},q=()=>{const e=u.useMemo(()=>i,[]);return l.jsxs(M,{children:[l.jsx(I,{children:"Country"}),l.jsx(t,{options:e,onChange:a=>console.log(a??""),inputProps:{placeholder:"Select a country"}})]})},X=()=>{const e=u.useMemo(()=>i,[]);return l.jsx(t,{options:e,inputProps:{placeholder:"Select a country"},onChange:a=>console.log(a??""),status:"negative"})},_=()=>{const e=u.useMemo(()=>i,[]),[a,n]=u.useState("AF"),s=u.useCallback(b=>{console.log(b??""),n(b)},[]),o=u.useCallback(({value:b,label:d},{isSelected:c,id:r})=>l.jsx(A,{id:r,isSelected:c,value:b,children:l.jsx("em",{style:{textTransform:"uppercase",fontWeight:c?"bold":void 0},children:d})},r),[]);return l.jsx(t,{options:e,inputProps:{placeholder:"Select a country"},value:a,onChange:s,itemRenderer:o})},aa=()=>{const e=u.useMemo(()=>i,[]);return l.jsx(t,{options:e,message:"This is a message",inputProps:{placeholder:"Select a country"},onChange:a=>console.log(a??"")})},ea=()=>{const e=u.useMemo(()=>i,[]);return l.jsx(t,{options:e,message:l.jsx(C,{startIcon:l.jsx(g,{}),children:"This is a message"}),inputProps:{placeholder:"Select a country"},onChange:a=>console.log(a??"")})},la=()=>{const[e,a]=u.useState([]),[n,s]=u.useState(),[o,b]=u.useState(!0),d=u.useCallback(r=>{console.log(r??""),s(r)},[]),c=u.useMemo(()=>o?l.jsx(l.Fragment,{children:new Array(6).fill(null).map((r,p)=>l.jsx(y,{hasIcon:!0,hasSublabel:!0,contentWidth:`${Math.min(Math.max(Math.random()*100,25),60)}%`},p))}):"No options found",[o]);return l.jsx(t,{inputProps:{placeholder:"Select a country"},value:n,onChange:d,emptyStateMessage:c,options:e,onShow:u.useCallback(async()=>{o&&(a(await G()),b(!1))},[o])})},ua=()=>{const e=u.useMemo(()=>i,[]);return l.jsx(t,{options:e,inputProps:{placeholder:"Select a country"},onChange:a=>console.log(a??""),enableVirtualization:!0})},na=()=>{const e=u.useMemo(()=>i,[]),[a,n]=u.useState(["CA","AX"]);return l.jsx(t,{options:e,inputProps:{placeholder:"Select a country"},multiple:!0,value:a,onChange:(s,o)=>{console.log(o.value+" "+o.type),n(s)}})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Y as Basic,$ as Controlled,_ as CustomRenderer,Q as DisabledItems,la as Loading,na as MultipleSelect,ua as Virtualized,ea as WithCustomMessageIcon,q as WithLabel,aa as WithMessage,X as WithStatus,J as default};
