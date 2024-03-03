# MTVA Design Színeivel Inspirált Reszponzív Weboldal

Ez a projekt egy reszponzív 1 oldalas weboldalt készít, mely a Magyar Televízió és Rádió (MTVA) dizájn színeit használja mintaként.
A weboldal egy Express szerveren fut, a kliens oldali rész pedig React-ot használ, melyet Vite segítségével hoztam létre.
Emellett MUI (Material-UI) keretrendszert, Swal (SweetAlert) üzenetmegjelenítőt és MUI Tool-tip-et használtam.

Figma design link:
https://www.figma.com/file/fLesHgpyGFF8tLrMtvUBvb/NAVA-L%C3%B6HomeWork?type=design&node-id=0%3A1&mode=design&t=qplwdSRBitGyhGjp-1

## Telepítés és Futtatás

1. **Környezet Beállítása:**
   - Node.js telepítése: [Node.js Letöltés](https://nodejs.org/)
   - Git telepítése: [Git Letöltés](https://git-scm.com/)

2. **Projekt Klónozása:**

   - git clone https://github.com/ifjandrasmolnar/navaho
   - cd navaho
   
3. **Futtatás Fejlesztői Módban:**
   - cd cliens/nava
   - npm install
   - npm run dev

   => http://localhost:5173 fut a cliens

4. **Szerver Indítása:**
   - cd server
   - npm install
   - npm run nodemon

   => http://localhost:5000 fut a server
 
## Felhasznált Technológiák

- **Express**: Node.js alapú webes keretrendszer a szerver oldalon.
- **React**: Egy népszerű JavaScript könyvtár a felhasználói felületek fejlesztésére.
- **Vite**: Egy modern, gyors és minimalista fejlesztői környezet a JavaScript projektekhez.
- **MUI (Material-UI)**: A Material Design alapú React komponensek könyvtára.
- **Swal (SweetAlert)**: Egy felhasználóbarát és testreszabható értesítési megoldás.
- **Nodemon**: fejlestéshez használt, automatikusan újrainditja a szervert mentéskor.

