import os
import shutil
from pathlib import Path

def copiar_directorio_completo_sin_node_modules():
    """Copia toda la estructura excluyendo node_modules"""
    
    origen_base = r"C:\Users\User\Documents\CURSOS\DESARROLLO DE APLICACIONES WEB 1\PRACTICAS_ROY\clase_12"
    destino_base = r"C:\Users\User\Documents\CURSOS\DESARROLLO DE APLICACIONES WEB 1\PRACTICAS_ROY\clase_12_FINAL_SIN_NODE_MODULES"
    
    # Lista de proyectos
    proyectos = [
        "01-Intro",
        "02-IntroReact",
        "03-usuarios", 
        "04-ecommerce",
        "listaUsers"
    ]
    
    print("🚀 Iniciando copia inteligente...")
    
    for proyecto in proyectos:
        origen_proyecto = os.path.join(origen_base, proyecto)
        destino_proyecto = os.path.join(destino_base, proyecto)
        
        if os.path.exists(origen_proyecto):
            print(f"📁 Copiando {proyecto}...")
            copiar_sin_node_modules(origen_proyecto, destino_proyecto)
        else:
            print(f"⚠️ No encontrado: {proyecto}")
    
    # Crear README de instrucciones
    crear_readme_completo(destino_base)
    print("✅ ¡Proceso completado!")

def copiar_sin_node_modules(origen, destino):
    """Copia un directorio excluyendo node_modules"""
    
    def ignorar_elementos(directorio, contenidos):
        # Ignorar node_modules y archivos temporales
        ignorados = set()
        if 'node_modules' in contenidos:
            ignorados.add('node_modules')
        return ignorados
    
    try:
        if os.path.exists(destino):
            shutil.rmtree(destino)
        
        shutil.copytree(origen, destino, ignore=ignorar_elementos)
        
    except Exception as e:
        print(f"❌ Error copiando {origen}: {e}")

def crear_readme_completo(destino_base):
    """Crea README completo con instrucciones"""
    readme_content = '''# 📦 Proyectos clase_12 - SIN node_modules

¡Hola compañero! 👋 

Esta carpeta contiene todos los proyectos de la clase 12, pero **SIN las carpetas node_modules** para que sea más liviana y rápida de transferir.

## 🚀 Instrucciones de instalación:

### 1. **01-Intro** (No requiere instalación)
```bash
cd 01-Intro
node 1-node.js
```

### 2. **02-IntroReact/tienda** (React + Vite)
```bash
cd 02-IntroReact/tienda
npm install
npm run dev
```

### 3. **03-usuarios** (React + Vite)
```bash
cd 03-usuarios
npm install
npm run dev
```

### 4. **04-ecommerce** (React + Vite)
```bash
cd 04-ecommerce  
npm install
npm run dev
```

### 5. **listaUsers** (Node.js)
```bash
cd listaUsers
npm install  
npm start
```

## 📋 Resumen de comandos:
```bash
# Para proyectos React (02, 03, 04):
npm install && npm run dev

# Para proyecto Node.js (listaUsers):
npm install && npm start
```

## ✅ Ventajas de este método:
- 🎯 **Carpeta súper liviana** - Sin miles de archivos de node_modules
- ⚡ **Transferencia rápida** - Descargas/envíos más rápidos  
- 🔄 **Dependencies frescas** - npm install descarga las versiones más actuales
- 🛡️ **Sin conflictos** - Cada máquina instala según su sistema operativo
- 💾 **Menos espacio** - Ahorro significativo de espacio en disco

## 🎉 ¡Listo para desarrollar!

**Nota:** Recuerda tener Node.js instalado en tu sistema. Puedes descargarlo desde https://nodejs.org

---
*Archivo generado automáticamente para facilitar el intercambio de proyectos*
'''
    
    readme_path = os.path.join(destino_base, "README_INSTALACION.md")
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(readme_content)
    
    print(f"📝 README creado: {readme_path}")

# Ejecutar
if __name__ == "__main__":
    copiar_directorio_completo_sin_node_modules()
