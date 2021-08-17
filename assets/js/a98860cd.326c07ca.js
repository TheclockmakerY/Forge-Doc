"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[447],{4599:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],r={sidebar_position:2,title:"Base du mod"},d=void 0,l={unversionedId:"bases/base_du_mod",id:"bases/base_du_mod",isDocsHomePage:!1,title:"Base du mod",description:"Introduction",source:"@site/docs/bases/base_du_mod.md",sourceDirName:"bases",slug:"/bases/base_du_mod",permalink:"/docs/bases/base_du_mod",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/bases/base_du_mod.md",version:"current",lastUpdatedBy:"FlowArg",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Base du mod"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/bases/installation"},next:{title:"Item basique",permalink:"/docs/items/item-basic"}},m=[{value:"Introduction",id:"introduction",children:[]},{value:"Classe principale",id:"classe-principale",children:[{value:"Organisation",id:"organisation",children:[]},{value:"Code",id:"code",children:[]}]},{value:"mods.toml",id:"modstoml",children:[{value:"Modid",id:"modid",children:[]},{value:"Nom du mod",id:"nom-du-mod",children:[]},{value:"Cr\xe9dits",id:"cr\xe9dits",children:[]},{value:"Description",id:"description",children:[]}]}],u={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"A la cr\xe9ation de votre mod, vous aurez besoin de cr\xe9er sa base.\nPour cela on va avoir besoin de cr\xe9er la classe principale et\nmodifier le mods.toml de quoi pouvoir faire d\xe9tecter votre mod \xe0 Forge."),(0,s.kt)("h2",{id:"classe-principale"},"Classe principale"),(0,s.kt)("h3",{id:"organisation"},"Organisation"),(0,s.kt)("p",null,"Pour commencer, dans le dossier ",(0,s.kt)("em",{parentName:"p"},"src/main/java"),", vous pouvez supprimer les packages d'exemple. On n'en aura pas besoin, on va tout reprendre de z\xe9ro.\nIl va falloir bien organiser notre mod d\xe8s le d\xe9part pour \xe9viter que ce soit vite le bazar.",(0,s.kt)("br",{parentName:"p"}),"\n","Pour cela on va nommer l'arborescence de nos packages de la m\xeame sorte qu'un nom de domaine d'un site web, mais dans le sens inverse.\nPar exemple dans mon cas ",(0,s.kt)("inlineCode",{parentName:"p"},"fr.zom.testmod"),". On rep\xe8re la langue du d\xe9veloppeur avec ",(0,s.kt)("inlineCode",{parentName:"p"},"fr"),", le pseudo ",(0,s.kt)("inlineCode",{parentName:"p"},"zom")," ainsi que le nom du mod ",(0,s.kt)("inlineCode",{parentName:"p"},"testmod"),"."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Il est fortement d\xe9conseill\xe9 d'utiliser des accents ainsi que des majuscules"))),(0,s.kt)("p",null,"Une fois les packages cr\xe9\xe9s, vous pouvez cr\xe9er une classe \xe0 laquelle on donne le nom de notre mod avec une majuscule au d\xe9but.\nPar exemple : ",(0,s.kt)("inlineCode",{parentName:"p"},"TestMod")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Dans cet article je suivrai la convention PascalCase."))),(0,s.kt)("h3",{id:"code"},"Code"),(0,s.kt)("p",null,"On va s'attaquer au code maintenant."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@Mod(TestMod.MODID)\npublic class TestMod {\n\n    public static final String MODID = "testmod";\n\n    public TestMod()\n    {\n       IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();\n       \n       bus.addListener(this::setup);\n       bus.addListener(this::clientSetup); \n    }\n    \n    public void setup(FMLCommonSetupEvent e)\n    {\n    }\n    \n    public void clientSetup(FMLClientSetupEvent e)\n    {\n    }\n    \n\n}\n\n')),(0,s.kt)("p",null,"D\xe9composons le code petit \xe0 petit.  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"@Mod(TestMod.MODID)\npublic class TestMod {\n")),(0,s.kt)("p",null,"Tout d'abord, nous devons ajouter l'annotation ",(0,s.kt)("em",{parentName:"p"},"@Mod")," avec en param\xe8tre le modid,\nsoit l'identifiant de notre mod pour signaler \xe0 Forge que notre mod est pr\xe9sent."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Il est fortement conseill\xe9 de mettre votre modid dans une variable final de sorte \xe0 ce que vous n'ayez pas \xe0 retaper \xe0 la main votre modid et ainsi limiter les erreurs (et en plus c'est pas hard-cod\xe9 et \xe7a c'est bien !). Et veillez \xe9galement \xe0 ne pas mettre de majuscules en \xe9crivant votre modid !"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"    public void setup(FMLCommonSetupEvent e)\n    {\n    }\n    \n    public void clientSetup(FMLClientSetupEvent e)\n    {\n    }\n")),(0,s.kt)("p",null,"Ici j'ai saut\xe9 quelques lignes, on reviendra sur le constructeur plus haut un peu apr\xe8s.\nLes deux m\xe9thodes que nous avons cr\xe9\xe9 juste ici serviront \xe0 certaines fonctions, notamment\npour la g\xe9n\xe9ration de minerais ou encore le changement de rendu de certains blocs/items\npar exemple. La m\xe9thode ",(0,s.kt)("em",{parentName:"p"},"setup")," servira pour les fonctionnalit\xe9s c\xf4t\xe9 serveur.\nLa m\xe9thode ",(0,s.kt)("em",{parentName:"p"},"clientSetup")," quant \xe0 elle, servira pour le c\xf4t\xe9 client, d'o\xf9 son nom."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"    public TestMod()\n    {\n       IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();\n       \n       bus.addListener(this::setup);\n       bus.addListener(this::clientSetup); \n    }\n")),(0,s.kt)("p",null,'Enfin, dans le constructeur, nous indiquons \xe0 Forge que nous "\xe9coutons" les events ',(0,s.kt)("em",{parentName:"p"},"FMLCommonSetupEvent")," et ",(0,s.kt)("em",{parentName:"p"},"FMLClientSetupEvent")," quand ils sont appel\xe9s.\nGrossi\xe8rement, on ex\xe9cute les m\xe9thodes ",(0,s.kt)("em",{parentName:"p"},"setup")," et ",(0,s.kt)("em",{parentName:"p"},"clientSetup")," lorsque Forge mets en place le jeu et le client sp\xe9cifiquement pour l'event ",(0,s.kt)("em",{parentName:"p"},"FMLClientSetupEvent"),"."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"La variable ",(0,s.kt)("strong",{parentName:"p"},"bus")," nous servira dans les tutoriels suivants pour enregistrer nos items et blocs."))),(0,s.kt)("p",null,"On en a fini avec le code. Il n'y a pas grand chose pour le moment, juste de quoi\nlancer le jeu avec notre mod pour \xeatre d\xe9tect\xe9 par Forge. Il nous reste plus qu'\xe0 remplir la\n\"carte d'identit\xe9\" de notre mod."),(0,s.kt)("h2",{id:"modstoml"},"mods.toml"),(0,s.kt)("p",null,"Cette fois-ci, on va se rendre dans le dossier ",(0,s.kt)("em",{parentName:"p"},"src/main/resources")," et vous devriez\ntrouver le fichier mods.toml dans le dossier ",(0,s.kt)("em",{parentName:"p"},"META-INF"),".\nCe dernier contient toutes les informations pour identifier votre mod. On va passer en revue ici les informations les plus importantes du fichier."),(0,s.kt)("h3",{id:"modid"},"Modid"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'# The modid of the mod\nmodId="testmod" #mandatory\n')),(0,s.kt)("p",null,"Ligne 18 du fichier, vous devriez avoir la propri\xe9t\xe9 ",(0,s.kt)("em",{parentName:"p"},"modId")," o\xf9 entre guillemets\nvous notez ",(0,s.kt)("strong",{parentName:"p"},"exactement")," la m\xeame chose que dans la variable cr\xe9\xe9e pr\xe9c\xe9demment dans\nvotre classe principale. Pour ma part ce sera ",(0,s.kt)("strong",{parentName:"p"},'"testmod"'),"."),(0,s.kt)("h3",{id:"nom-du-mod"},"Nom du mod"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'# A display name for the mod\ndisplayName="TestMod" #mandatory\n')),(0,s.kt)("p",null,"Ligne 26, on a acc\xe8s \xe0 la forme que le prendra le nom du mod dans la liste\ndes mods de Forge. Ici vous avez plus de libert\xe9s que pour le modid, vous\npouvez ins\xe9rer des espaces, des majuscules et m\xeame des accents."),(0,s.kt)("h3",{id:"cr\xe9dits"},"Cr\xe9dits"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'# A text field displayed in the mod UI\ncredits="Tutoriel r\xe9alis\xe9 pour LMF" #optional\n# A text field displayed in the mod UI\nauthors="Zom\'" #optional\n')),(0,s.kt)("p",null,"Ligne 29, vous pouvez indiquer des remerciements particuliers comme pour les\ngraphistes et les diff\xe9rents contributeurs au mod dans les ",(0,s.kt)("em",{parentName:"p"},"credits"),". Vous\npouvez \xe9galement renseigner les auteurs du mod dans ",(0,s.kt)("em",{parentName:"p"},"authors"),"."),(0,s.kt)("h3",{id:"description"},"Description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"# The description text for the mod (multi line!) (#mandatory)\ndescription='''\nCeci est la \ndescription sur plusieurs lignes\ndu mod.\n'''\n")),(0,s.kt)("p",null,"Ligne 33 est renseign\xe9e la description du mod que vous pourrez retrouver\ndans la liste des mods quand vous s\xe9lectionner le votre. Vous pouvez\ny d\xe9crire de mani\xe8re conscise ce qu'ajoute votre mod au jeu."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\xc0 vous de jouer ! Il ne vous reste plus qu'\xe0 lancer la configuration\n",(0,s.kt)("em",{parentName:"p"},"runClient")," dans votre IDE et voir dans la liste des mods\nsi votre mod est pr\xe9sent !")))}p.isMDXComponent=!0}}]);