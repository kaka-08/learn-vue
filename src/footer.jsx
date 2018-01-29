
import  "./styles/footer.less";
export default {
    data(){
        return{
            name:"kaka"
        }    
      },
    render(){   
        return(
            <div id="footer" class="footerS">
              <span>This is a demo of Vue,My name is { this.name }</span>
            </div>
        )
    }
}
