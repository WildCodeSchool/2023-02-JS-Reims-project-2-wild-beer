function Rules() {
  return (
    <section className="listRules">
      <h1 className="titleRules">Règles du jeu</h1>
      <ul className="rules">
        <li>Un joueur se bat contre un ordinateur.</li>

        <li>
          Le joueur et l'ordinateur commencent avec 5 cartes bière chacun
          (distribuées aléatoirement).
        </li>

        <li>
          Chaque carte possédera des attributs bière correspondant aux
          différents thèmes des rounds.
        </li>

        <li>
          La partie se déroule en 5 rounds, chaque round aura un thème défini.
        </li>

        <li>
          Après la sélection de la carte par les joueurs, le meilleur score
          correspondant au thème du round remporte un point apéro.
        </li>

        <li>
          Celui qui possède le plus de point apéro en fin de partie gagne.
        </li>

        <li>
          Description caractéristiques: IBU = amertume, ABV = degré d'alcool,
          EBC = indice de couleur, SRM = transparence.
        </li>
      </ul>
    </section>
  );
}

export default Rules;
