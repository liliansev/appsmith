export default {
  myVar1: [], // Vous pouvez utiliser cette variable pour stocker les données transformées
  transformData() {
    // Récupérer les données de votre requête API
    const apiResponse = liste_factures.data; // Remplacez 'getFactures' par le nom de votre requête API

    // Vérifier si les données existent
    if (!apiResponse || !apiResponse.records) {
      return []; // Retourne un tableau vide si aucune donnée n'est disponible
    }

    // Transformer les données
    const transformedData = apiResponse.records.map(record => {
      return {
        id: record.id,
        name: record.fields.Name || 'N/A',
        clients: record.fields.Clients ? record.fields.Clients.join(', ') : 'N/A',
        urlFacture: record.fields.url_facture || 'N/A',
        facturePDFUrl: record.fields.facture_pdf && record.fields.facture_pdf[0] ? record.fields.facture_pdf[0].url : 'N/A',
        date: record.fields.Date ? moment(record.fields.Date).format('DD/MM/YYYY') : 'N/A',
        montantTTC: record.fields.MontantTTC ? record.fields.MontantTTC.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }) : 'N/A',
        status: record.fields.Status || 'N/A',
        emailClient: record.fields.email_client ? record.fields.email_client.join(', ') : 'N/A'
      };
    });

    // Stocker le résultat dans une variable pour utilisation ultérieure
    this.myVar1 = transformedData;

    // Retourner les données transformées si nécessaire
    return transformedData;
  },
  async myFun2() {
    // Vous pouvez utiliser cette fonction pour des opérations asynchrones si nécessaire
  }
}