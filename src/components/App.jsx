import Footer from './Footer';
import Header from './Header';
import Note from './note';
import notes from '../notes';


const App = () => {


    return (
        <div>
            <Header/>
            {notes.map((note) => <Note 
                key={note.id} 
                title={note.title} 
                content={note.content}
                />
            )}
            <Footer/>
        </div>
    );
}
 
export default App;