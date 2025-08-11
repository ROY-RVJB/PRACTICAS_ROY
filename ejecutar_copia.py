import os
import shutil
from pathlib import Path

def copiar_proyecto_sin_node_modules(origen, destino):
    """
    Copia un proyecto completo excluyendo las carpetas node_modules
    """
    def ignorar_node_modules(directorio, contenidos):
        """Función para ignorar carpetas node_modules"""
        return {'node_modules'} if 'node_modules' in contenidos else set()
    
    try:
        # Si existe el destino, eliminarlo
        if os.path.exists(destino):
            shutil.rmtree(destino)
            print("🗑️ Carpeta anterior eliminada.")
        
        # Crear directorio destino
        Path(destino).mkdir(parents=True, exist_ok=True)
        
        # Copiar todo el contenido excluyendo node_modules
        shutil.copytree(origen, destino, ignore=ignorar_node_modules, dirs_exist_ok=True)
        
        print(f"✅ Proyecto copiado exitosamente!")
        print(f"📂 Origen: {origen}")
        print(f"📁 Destino: {destino}")
        
        # Mostrar estadísticas
        mostrar_estadisticas(origen, destino)
        
        return True
        
    except Exception as e:
        print(f"❌ Error al copiar el proyecto: {e}")
        return False

def mostrar_estadisticas(origen, destino):
    """Muestra estadísticas de la copia"""
    def contar_archivos_y_carpetas(ruta, excluir_node_modules=False):
        archivos = 0
        carpetas = 0
        for root, dirs, files in os.walk(ruta):
            if excluir_node_modules and 'node_modules' in dirs:
                dirs.remove('node_modules')  # No entrar en node_modules
            archivos += len(files)
            carpetas += len(dirs)
        return archivos, carpetas
    
    # Contar en origen (incluyendo node_modules)
    archivos_origen, carpetas_origen = contar_archivos_y_carpetas(origen, False)
    
    # Contar en destino (sin node_modules)
    archivos_destino, carpetas_destino = contar_archivos_y_carpetas(destino, True)
    
    print(f"\n📊 ESTADÍSTICAS:")
    print(f"   Original: {archivos_origen} archivos, {carpetas_origen} carpetas")
    print(f"   Copiado: {archivos_destino} archivos, {carpetas_destino} carpetas")
    print(f"   Reducción: {archivos_origen - archivos_destino} archivos menos")

def crear_readme_instrucciones(destino):
    """Crea un README con instrucciones de instalación"""
    readme_content = """# 📦 Proyecto clase_12 sin node_modules

Este proyecto ha sido limpiado y no incluye las carpetas `node_modules`.

## 🚀 Instrucciones de instalación:

### Para cada proyecto que tenga package.json:

1. **Navegar al directorio del proyecto:**
   ```bash
   cd 02-IntroReact/tienda
   npm install
   npm run dev
   ```

2. **Para 03-usuarios:**
   ```bash
   cd 03-usuarios
   npm install
   npm run dev
   ```

3. **Para 04-ecommerce:**
   ```bash
   cd 04-ecommerce
   npm install
   npm run dev
   ```

4. **Para listaUsers:**
   ```bash
   cd listaUsers
   npm install
   npm start
   ```

### Lista de proyectos que requieren npm install:
- ✅ 02-IntroReact/tienda (React + Vite)
- ✅ 03-usuarios (React + Vite)
- ✅ 04-ecommerce (React + Vite)
- ✅ listaUsers (Node.js básico)
- ℹ️ 01-Intro (solo un archivo .js, no requiere instalación)

## ✅ Ventajas de este método:
- ✨ Carpeta mucho más liviana para enviar (sin miles de archivos de node_modules)
- 🔄 Dependencias siempre actualizadas al hacer npm install
- 🛡️ Sin conflictos de versiones entre diferentes máquinas
- 📦 Instalación limpia en cada entorno
- 🚀 Más rápido para transferir y descargar

¡Listo para desarrollar! 🎉

---
Generado automáticamente por el script copiar_sin_node_modules.py
"""
    
    readme_path = Path(destino) / "README_INSTALACION.md"
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(readme_content)
    
    print(f"📝 README de instrucciones creado: {readme_path}")

# Ejecutar directamente
if __name__ == "__main__":
    origen = r"C:\Users\User\Documents\CURSOS\DESARROLLO DE APLICACIONES WEB 1\PRACTICAS_ROY\clase_12"
    destino = r"C:\Users\User\Documents\CURSOS\DESARROLLO DE APLICACIONES WEB 1\PRACTICAS_ROY\clase_12_sin_node_modules"
    
    print("🚀 INICIANDO COPIA DE PROYECTO SIN NODE_MODULES")
    print("=" * 60)
    
    if not os.path.exists(origen):
        print(f"❌ Error: La carpeta origen no existe: {origen}")
    else:
        success = copiar_proyecto_sin_node_modules(origen, destino)
        if success:
            crear_readme_instrucciones(destino)
            print("\n" + "=" * 60)
            print("🎉 ¡PROCESO COMPLETADO!")
            print(f"📁 Tu proyecto limpio está en: {destino}")
            print("💡 Comparte esta carpeta con tu compañero.")
