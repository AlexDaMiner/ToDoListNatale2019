1 Introduzione

    1.1 Scopo
        Il proposito di questo documento è quello di specificare i 
        requisiti del progetto
        "TodoListApp_ByLibri.js" per facilitarne la realizzazione.
        Questo documento è stato scritto seguendo le indicazioni 
        contenute nel documento "IEEE Recommended Practice for Software 
        Requirements Specifications" avente riferimento IEEE Std 
        830-1993 (Revision of IEEE Std 830-1984).

    1.2 obiettivi
        si è posto come obiettivo quello di dare la possibilità di
        aggiungere ed eliminare ToDo a piacimento e senza vincoli.

    1.3 Definizioni
        I ToDo sono delle azione che si ha intenzione di svolgere in un futuro più o meno prossimo.

2 Descrizione generale

    2.1 Prospettive del prodottto
        Il prodotto potrà essere utilizzato in un browser, su una macchina dotata di connessione ad internet.

    2.2 Funzionalità del prodotto
        Il prodotto offre la possibilità di digitare in un campo di testo il contenuto del proprio ToDo, e di eliminarlo con un semplice click del mouse.

    2.3 Caratteristiche utente
        Il prodotto è rivolto a chunque abbia la necessità di utilizare un software per la memorizzazione dei propri ToDo.

    2.4 Vincoli generali
        All'utente non è data la possibilità di ordinare o spostare i ToDo.

    2.5 Assunzioni e dipendenze
        Il prodotto fa utilizzo della libreria react di javascript, e della libreria css chiamata "miniCss".

3 Requisiti specifici

    3.1 Interfaccia utente
        L'utente interagiraà con una schermata che presenta un campo di testo con a fianco un pulsante.
        All'aggiunta di ogni ToDo comparirà un testo che presenterà a fianco un pulsante che permette di rimuovere il ToDo a cui è associato.