function ChooseInsect({ insects, activeInsect, setActiveInsect }) {

  return (
    <div className="choose-insect">
      <h2>Who You Swattin?</h2>
      <ul>
        {insects.map(insect => (
          <li
            key={insect.name}
            className={`insect ${insect.name === activeInsect ? 'active' : ''}`}
            onClick={() => setActiveInsect(insect.name)}
          >
            <p>{insect.name}</p>
            <img src={insect.img} alt={insect.alt} className="insect-img" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseInsect;
