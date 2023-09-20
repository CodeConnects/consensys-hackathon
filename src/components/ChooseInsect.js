function ChooseInsect() {
  return (
    <div className="choose-insect">
      <h2>Who You Swattin?</h2>
      <ul>
        <li className="insect">
          <p>Mosquito</p>
          <img src="https://pngimg.com/uploads/mosquito/small/mosquito_PNG18158.png" alt="mosquito" className="insect-img" />
        </li>
        
        <li className="insect">
          <p>Spider</p>
          <img src="https://pngimg.com/uploads/spider/spider_PNG20.png" alt="spider" className="insect-img" />
        </li>

        <li className="insect">
          <p>Fly</p>
          <img src="https://pngimg.com/uploads/fly/fly_PNG3946.png" alt="fly" className="insect-img" />
        </li>

        <li className="insect">
          <p>Roach</p>
          <img src="https://pngimg.com/uploads/roach/roach_PNG12163.png" alt="roach" className="insect-img" />
        </li>
      </ul>
    </div>
  );
}

export default ChooseInsect;
