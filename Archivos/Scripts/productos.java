import java.util.ArrayList;

public class Productos {
    protected String nombreP; //nombre del producto
    protected String claveP; //clave para el producto
    protected int cantidad; //cantidad o existencias del producto
    protected int precio; //precio a asignar al producto
    

    //constructor vacio
    public Productos(){
        
    }
    
    //constructor para asignar valores a un prodcuto
    public Productos(String nombreP, String claveP, int cantidad, int precio){
        this.nombreP = nombreP;
        this.claveP = claveP;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    
    //getters y setters
    public String getNombreP(){
        return nombreP;
    }

    public String getClaveP(){
        return claveP;
    }

    public int getCantidad(){
        return cantidad;
    }

    public int getPrecio(){
        return precio;
    }

    public void setNombreP(String nombreP) {
        this.nombreP = nombreP;
    }

    public void setClaveP(String claveP) {
        this.claveP = claveP;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }
    
    //productos
    public static ArrayList<Productos> inicializa(){
        ArrayList<Productos> lista = new ArrayList();
        
        Productos producto1 = new Productos("Fresa", "A100", 10, 20);
        Productos producto2 = new Productos("Chile", "A101", 8, 25);
        Productos producto3 = new Productos("Pepino", "A102", 12, 15);
        
        lista.add(producto1);
        lista.add(producto2);
        lista.add(producto3);
        
        return lista;
    }