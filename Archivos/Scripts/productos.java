import java.util.ArrayList;

public class Productos {
    protected String nombreP; //nombre del producto
    protected String claveP; //clave para el producto
    protected String Variedad;
    protected int tiempocrecimiento;
    protected int pesoprom;
    protected int toneladasxhectarea;

    public Productos() {
    }

    public Productos(String nombreP, String claveP, String Variedad, int tiempocrecimiento, int pesoprom, int toneladasxhectarea) {
        this.nombreP = nombreP;
        this.claveP = claveP;
        this.Variedad = Variedad;
        this.tiempocrecimiento = tiempocrecimiento;
        this.pesoprom = pesoprom;
        this.toneladasxhectarea = toneladasxhectarea;
    }

    public String getNombreP() {
        return nombreP;
    }

    public String getClaveP() {
        return claveP;
    }

    public String getVariedad() {
        return Variedad;
    }

    public int getTiempocrecimiento() {
        return tiempocrecimiento;
    }

    public int getPesoprom() {
        return pesoprom;
    }

    public int getToneladasxhectarea() {
        return toneladasxhectarea;
    }

    public void setNombreP(String nombreP) {
        this.nombreP = nombreP;
    }

    public void setClaveP(String claveP) {
        this.claveP = claveP;
    }

    public void setVariedad(String Variedad) {
        this.Variedad = Variedad;
    }

    public void setTiempocrecimiento(int tiempocrecimiento) {
        this.tiempocrecimiento = tiempocrecimiento;
    }

    public void setPesoprom(int pesoprom) {
        this.pesoprom = pesoprom;
    }

    public void setToneladasxhectarea(int toneladasxhectarea) {
        this.toneladasxhectarea = toneladasxhectarea;
    }
    
    public static ArrayList<Productos> inicializa() {
        ArrayList<Productos> lista = new ArrayList<>();
        
        Productos producto1 = new Productos("Fresa", "A100", "Variedad1", 30, 20, 10);
        Productos producto2 = new Productos("Chile", "A101", "Variedad2", 60, 25, 15);
        Productos producto3 = new Productos("Pepino", "A102", "Variedad3", 40, 15, 12);
        
        lista.add(producto1);
        lista.add(producto2);
        lista.add(producto3);
        
        return lista;
    }

    public static ArrayList<Productos> agregaProductos(String clave, String nombre, String variedad, int tiempoCrecimiento, int pesoProm, int toneladasXHectarea) {
        ArrayList<Productos> prods = inicializa();
        prods.add(new Productos(nombre, clave, variedad, tiempoCrecimiento, pesoProm, toneladasXHectarea));
        return prods;
    }
    
}