function SwatScreen({gameOn, gameInsects, createInsect}) {
  const newInsect = createInsect();
  return (
    <div className="swat-screen">
      {gameOn ? <div>{newInsect} Game Content Here</div> : null}
    </div>
  );
}

export default SwatScreen;
