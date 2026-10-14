import { useState } from "react";
import expertsData from "./data.jsx";

function Formulaire() {
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [cout, setCout] = useState("");
  const [expertId, setExpertId] = useState("1");
  const [message, setMessage] = useState("");

  function confirmer(e) {
    e.preventDefault();

    const expert = expertsData.find(
      (item) => item.id === Number(expertId)
    );

    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);

    const duree =
      Math.round((fin - debut) / (1000 * 60 * 60 * 24)) + 1;

    if (
      theme === "" ||dateDebut === "" || dateFin === "" || cout === "" ||fin < debut ||Number(cout) <= 0
    ) {
      setMessage("Veuillez vérifier les informations saisies.");
      return;
    }

    const total = Number(cout) * duree;

    setMessage(
      `L'expert ${expert.nom_complet} assurera le thème : ${theme}, ` +
      `avec un coût journalier de ${cout} DH pour une durée de ` +
      `${duree} jours, soit un coût total de ${total} DH.`
    );
  }

  return (
    <div>
      <h2>Formulaire de l'événement</h2>

      <form onSubmit={confirmer}>
        <label>Thème :</label>
        <input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />

        <br />

        <label>Date de début :</label>
        <input
          type="date"
          value={dateDebut}
          onChange={(e) => setDateDebut(e.target.value)}
          required
        />

        <br />

        <label>Date de fin :</label>
        <input
          type="date"
          value={dateFin}
          onChange={(e) => setDateFin(e.target.value)}
          required
        />

        <br />

        <label>Coût journalier :</label>
        <input
          type="number"
          value={cout}
          onChange={(e) => setCout(e.target.value)}
          required
        />

        <br />

        <label>Expert :</label>
        <select
          value={expertId}
          onChange={(e) => setExpertId(e.target.value)}
        >
          {expertsData.map((expert) => (
            <option key={expert.id} value={expert.id}>
              {expert.nom_complet}
            </option>
          ))}
        </select>

        <br />

        <button type="submit">Confirmer</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Formulaire;






























