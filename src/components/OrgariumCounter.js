import Counter from "./Counter";

const OrgariumCounter = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={100} />+
            </h2>
            <p>Farmers</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={20} />+
            </h2>
            <p>Team Members</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={10} />+
            </h2>
            <p>Expert Team Members</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={20} />+
            </h2>
            <p>Farms</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrgariumCounter;

export const OrgariumCounter2 = () => (
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={3652} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={896} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={945} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={565} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
  </div>
);
