type ComponentsOptions = {
    selector: string
}

function Component(options: ComponentsOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueTd = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        }
    }
}

@Component({selector:'#my-profile'})
class ProfileComponent{

}