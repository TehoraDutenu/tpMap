const STORAGE_NAME = 'localevento';

class LocalEventos {
    // Récupérer les infos d'événements
    readStorage() {
        // variable qui contient les datas
        let arrEventos = [];

        // récupérer les datas du localStorage
        const eventosDatas = localStorage.getItem(STORAGE_NAME);

        // si l'événement n'existe pas
        if (!eventosDatas) return arrEventos;

        // si l'événement existe
        try {
            // on essaie de parser
            arrEventos = JSON.parse(eventosDatas);
        } catch (error) {
            // supprimer les datas corrompues
            localStorage.removeItem(STORAGE_NAME);
        }

        // on retourne les datas
        return arrEventos;
    }

    // sauvegarder les datas dans le localStorage
    saveStorage(arrEventos) {
        // transformer les objets en string
        const eventosDatas = JSON.stringify(arrEventos);

        // enregistrer dans le localStorage
        localStorage.setItem(STORAGE_NAME, eventosDatas);
    } catch(error) {
        // afficher l'éventuelle erreur
        console.log(error);

        return false;
    }
}