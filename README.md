# MTVA Design Színeivel Inspirált Reszponzív Weboldal

Ez a projekt egy reszponzív 1 oldalas weboldalt készít, mely a Magyar Televízió és Rádió (MTVA) dizájn színeit használja mintaként. A weboldal egy Express szerveren fut, a kliens oldali rész pedig React-et használ, melyet Vite segítségével hoztunk létre.

## Telepítés és Futtatás

1. Környezet Beállítása:
   - Node.js telepítése: [Node.js Letöltés](https://nodejs.org/)

2. Projekt Klónozása:
   git clone [https://github.com/felhasználónév/projekt-neve.git](https://github.com/ifjandrasmolnar/navaho)
   cd projekt-neve
   
4. Függőségek Telepítése:
   npm install

5. Futtatás Fejlesztői Módban:
   cd client
   cd nava
   npm run dev
   
   Ez elindítja a fejlesztői szervereket mind a kliens, mind a szerver oldalon, és automatikusan újratölti a változásokat.

9. Szerver Indítása:
   cd server
   npm run nodemon
   
   Ez elindítja az Express szerver, mely a termelésre kész buildet szolgálja ki.

## Felhasznált Technológiák

- Express: Node.js alapú webes keretrendszer a szerver oldalon.
- **React: Egy népszerű JavaScript könyvtár a felhasználói felületek fejlesztésére.
- Vite: Egy modern, gyors és minimalista fejlesztői környezet a JavaScript projektekhez.
