import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Paran Cebinde Kalsın, Tatilin Keyfini Çıkar!</h1>
      <span className="mailDesc">Fırsatlar Ayağına Gelsin, Sen Valizini Hazırla!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="E-Posta Adresiniz" />
        <button>Abone Ol!</button>
      </div>
    </div>
  )
}

export default MailList