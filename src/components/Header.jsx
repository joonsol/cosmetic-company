import './styles/Header.css'
import Nav from './Nav'
const Header = ({headerState ,onClickSub}) => {
    return (
        <header className={headerState? 'On':''}>
            <div className="in_wrap">

            <h1>Cosmetic Co.</h1>
            <Nav onClickSub={onClickSub}/>
            </div>
        </header>
    )
}
export default Header
