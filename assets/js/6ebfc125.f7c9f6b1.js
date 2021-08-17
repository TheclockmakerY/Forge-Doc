"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[122],{8578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var s=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],o={sidebar_position:1,title:"Item basique"},u=void 0,l={unversionedId:"items/item-basic",id:"items/item-basic",isDocsHomePage:!1,title:"Item basique",description:"Type d'enregistrement",source:"@site/docs/items/item-basic.md",sourceDirName:"items",slug:"/items/item-basic",permalink:"/docs/items/item-basic",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/items/item-basic.md",version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Item basique"},sidebar:"tutorialSidebar",previous:{title:"Base du mod",permalink:"/docs/bases/base_du_mod"},next:{title:"Propri\xe9t\xe9s d'item",permalink:"/docs/items/properties"}},d=[{value:"Type d&#39;enregistrement",id:"type-denregistrement",children:[{value:"DeferredRegister",id:"deferredregister",children:[]}]},{value:"Enregistrer l&#39;item",id:"enregistrer-litem",children:[{value:"Sans classe custom",id:"sans-classe-custom",children:[]},{value:"Avec classe custom",id:"avec-classe-custom",children:[]}]},{value:"Ressources",id:"ressources",children:[{value:"Mod\xe8le et texture",id:"mod\xe8le-et-texture",children:[]},{value:"Traductions",id:"traductions",children:[]}]}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-denregistrement"},"Type d'enregistrement"),(0,i.kt)("p",null,"Pour que l'item soit reconnu par le jeu, il nous faut l'enregistrer, et pour cela deux choix s'offrent \xe0 nous. Soit les events, soit les DeferredRegister. Ici nous nous int\xe9resserons au DeferredRegister."),(0,i.kt)("h3",{id:"deferredregister"},"DeferredRegister"),(0,i.kt)("p",null,"Pour enregistrer un item avec cette technique, il nous faut d\xe9j\xe0 cr\xe9er le DeferredRegister (qui est une fa\xe7on de communiquer directement avec les registres sans passer par les events). Pour cela rendez-vous dans une classe au choix et rajoutez ceci :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, "modid");\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tous les noms de classes, de variables et de m\xe9thodes sont personnalisables comme vous le souhaitez, et cela, tout au long du ",(0,i.kt)("em",{parentName:"p"},"tutoriel"),"."))),(0,i.kt)("p",null,"Maintenant pour faire comprendre au jeu que ce DeferredRegister existe, il faut le d\xe9clarer et pour cela rendez-vous dans le constructeur de votre classe principale pour y ajouter ceci :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ClasseItems.ITEMS.register(FMLJavaModLoadingContext.get().getModEventBus());\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Le nom ",(0,i.kt)("strong",{parentName:"p"},"ClasseItems")," doit \xeatre chang\xe9 par celui de la classe o\xf9 se situe la variable \xe9nonc\xe9e plus t\xf4t"))),(0,i.kt)("h2",{id:"enregistrer-litem"},"Enregistrer l'item"),(0,i.kt)("p",null,"Maintenant que l'un des types d'enregistrement a \xe9t\xe9 vu, il ne nous reste plus qu'\xe0 enregistrer l'item et ici deux types sont possibles. Enregistrer l'item avec une classe custom ou sans."),(0,i.kt)("h3",{id:"sans-classe-custom"},"Sans classe custom"),(0,i.kt)("p",null,"Cette mani\xe8re nous permet d'enregistrer un item, mais celui-ci sera tr\xe8s basique (c'est-\xe0-dire qu'on ne pourra pas d\xe9finir une action lors d'un clique droit ou m\xeame lors de la destruction de l'item)."),(0,i.kt)("p",null,"Ainsi pour faire l'enregistrement, ajoutez une variable comme celle-ci dans la classe contenant le DeferredRegister :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final RegistryObject<Item> MON_ITEM = ITEMS.register("mon_item", () -> new Item(new Item.Properties().stacksTo(10)));\n')),(0,i.kt)("p",null,"Si vous souhaitez en savoir un peu plus sur les diff\xe9rentes propri\xe9t\xe9s disponibles, voici une ",(0,i.kt)("a",{parentName:"p",href:"./properties"},"page d\xe9di\xe9e \xe0 ceci"),"."),(0,i.kt)("h3",{id:"avec-classe-custom"},"Avec classe custom"),(0,i.kt)("p",null,"Ici cette mani\xe8re nous permettra plus tard, d'ajouter des comportements \xe0 l'item (nous ne verrons cela que dans un prochain chapitre).\nPour cela, vous devez tout d'abord cr\xe9er une classe custom \xe9tendu de la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", ce qui nous donne une classe du type :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MonItem extends Item {\n    public MonItem(Properties properties) {\n        super(properties);\n    }\n}\n")),(0,i.kt)("p",null,"Ainsi nous pourrons enregistrer l'item comme dans la technique sans classe custom sauf que nous ferons un ",(0,i.kt)("inlineCode",{parentName:"p"},"new MonItem")," et non ",(0,i.kt)("inlineCode",{parentName:"p"},"new Item"),", ce qui donne une variable du type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final RegistryObject<Item> MON_ITEM = ITEMS.register("mon_item", () -> new MonItem(new Item.Properties().tab(CreativeModeTab.TAB_MISC)));\n')),(0,i.kt)("h2",{id:"ressources"},"Ressources"),(0,i.kt)("p",null,"Maintenant que notre item est ajout\xe9, il faut lui donner un mod\xe8le, une texture ainsi qu'un nom qui d\xe9pendra de la langue."),(0,i.kt)("h3",{id:"mod\xe8le-et-texture"},"Mod\xe8le et texture"),(0,i.kt)("p",null,"Pour un item, son mod\xe8le permet de d\xe9finir sa forme ainsi que les textures qui lui seront appliqu\xe9es."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title='Arborescence basique des ressources pour un mod'",title:"'Arborescence",basique:!0,des:!0,ressources:!0,pour:!0,un:!0,"mod'":!0},"assets\n\u2514\u2500\u2500 modid\n    \u251c\u2500\u2500 blockstates\n    \u251c\u2500\u2500 lang\n    \u251c\u2500\u2500 models\n    \u2502     \u251c\u2500\u2500 block\n    \u2502     \u2514\u2500\u2500 item\n    \u2514\u2500\u2500 textures\n          \u251c\u2500\u2500 block\n          \u2514\u2500\u2500 item\n")),(0,i.kt)("p",null,"Ici nous appliquerons un mod\xe8le basique assimilable au diamant."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent": "minecraft:item/generated",\n  "textures": {\n    "layer0": "minecraft:item/mon_item"\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"parent")," correspond au mod\xe8le maitre que l'item va utiliser."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"textures")," correspond aux textures appliqu\xe9 \xe0 l'item."),(0,i.kt)("p",null,"Comme sp\xe9cifi\xe9 dans le mod\xe8le, la texture se situera dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"textures/item")," et aura comme nom ",(0,i.kt)("inlineCode",{parentName:"p"},"mon_item.png")," (l'extension est importante)."),(0,i.kt)("h3",{id:"traductions"},"Traductions"),(0,i.kt)("p",null,"Un item \xe0 sa cr\xe9ation se voie attribuer de mani\xe8re syst\xe9matique un nom d\xe9localis\xe9. La raison \xe9tant que celui-ci permet de traduire le nom de l'item dans toutes les langues support\xe9es par le jeu."),(0,i.kt)("p",null,"Ici l'item ne comportera qu'un nom traduit en anglais (en_us) qui est la langue de base du jeu (en cas de traduction manquante dans une autre langue, le jeu appliquera cette traduction), mais voici toutes les ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Language"},"langues")," disponible dans le jeu avec leurs codes respectifs. "),(0,i.kt)("p",null,"Les fichiers de langue sont situ\xe9s dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"lang")," des ressources."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=en_us.json",title:"en_us.json"},'{\n  "item.modid.mon_item": "My Item"\n}\n')))}c.isMDXComponent=!0}}]);