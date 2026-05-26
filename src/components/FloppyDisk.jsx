export default function FloppyDisk({title}) {
  return (
    <>
      <div className="floppyDisk-container">
        <div className="floppyDisk-topper"></div>
        <div className="floppyDisk-namePlace">
          <h3 className="floppyDisk-title">{title}</h3>
        </div>
      </div>
    </>
  );
}
