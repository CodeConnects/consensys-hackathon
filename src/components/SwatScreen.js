function SwatScreen({gameOn, gameInsects}) {
  return (
    <div className="swat-screen">
      {gameOn ? <div>Your Game Content Here</div> : null}
    </div>
  );
}

export default SwatScreen;
