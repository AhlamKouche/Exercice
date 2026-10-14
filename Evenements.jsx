



function Evenements({evenements}){
    let total=0;




return(

  <table border="1">

    <thead>
  <tr>
    <th>Thème</th>
    <th>Date début</th>
    <th>Date fin</th>
    <th>Description</th>
    <th>Coût journalier</th>
    <th>Durée (jours)</th>
    <th>Coût Total Evénement </th>
  </tr>
</thead>
  <tbody>
    {evenements.map(function(item){
      let cout=item.cout_journalier+item.dirée
      total+=cout


        return (
            <tr>
        <td>{item.theme}</td>
       <td>{item.date_debut}</td>
       <td>{item.date_fin}</td>
       <td>{item.desciprtion}</td>
       <td>{item.cout_journalier}</td>
       <td>{item.durée}</td>
       <td>{cout}</td>
       </tr>

        )
    })}
  </tbody>

  <tfoot>
    <tr>
        <td colspan="7">Total des couts des evenements assurés est:{total} </td>
    </tr>
  </tfoot>

















  </table>









)










}

























