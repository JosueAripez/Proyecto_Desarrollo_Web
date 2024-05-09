import java.io.Serializable;
import java.util.ArrayList;

public class Users implements Serializable{
    protected String clave;
    protected String pwd;
    protected String nombre;
    protected int id_usuario;

    public Users(){
        
    }

    public String getClave(){
        return clave;
    }

    public void setClave(String clave){
        this.clave = clave;
    }

    public String getPwd(){
        return pwd;
    }

    public void setPwd(String pwd){
        this.pwd = pwd;
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public int getId_usuario(){
        return id_usuario;
    }

    public void setId_usuario(int id_usuario){
        this.id_usuario = id_usuario;
    }

    public Users(String clave, String pwd, String nombre, int id_usuario){
        this.clave = clave;
        this.pwd = pwd;
        this.nombre = nombre;
        this.id_usuario = id_usuario;
    }
    
    public static ArrayList<Users> inicializa(){
        ArrayList<Users> lista = new ArrayList();
        
        Users u1 = new Users();
        
        u1.setClave("1205");
        u1.setId_usuario(1);
        u1.setNombre("Cellinia Texas");
        u1.setPwd("1205469");
        lista.add(u1);
        
        return lista;
    }
    
    public static Users validaUsuario(String u, String p){
        ArrayList<Users> listado = inicializa();
        
        for(Users user : listado){
            if(user.getClave().equals(u) && user.getPwd().equals(p)){
                return user;
            }
        }
        
        return null;
    }
}