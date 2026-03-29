export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor : '#eef0f1',
    fontFamily: '"Google Sans", sans-serif', // Tipografía oficial [2]
    color: '#1e1e1e' // Black 02 [1]
  },
  rouletteWrapper: {
    position: 'relative' as const,
    width: '250px',
    height: '250px',
    maxWidth: '320px',
    maxHeight: '320px',
    minWidth: '200px',
    minHeight: '200px',
    borderRadius: '50%',
    border: '2px solid #1e1e1e',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
  },
  pointer: {
    position: 'absolute' as const,
    top: '2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '30px solid #1e1e1e', // Puntero color Red 500 [1]
    zIndex: 10
  },
  wheel: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    position: 'relative' as const,
    transition: 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)',
  },
  button: {
    marginTop: '40px',
    padding: '12px 32px',
    fontSize: '14px',
    fontFamily: '"Google Sans Medium", sans-serif', // Subhead [2]
    color: '#fff',
    backgroundColor: '#4285F4', // Blue 500 para llamadas a la acción [1]
    border: 'none',
    borderRadius: '24px',
    boxShadow: '0 4px 6px rgba(66, 133, 244, 0.3)',
    transition: 'background-color 0.3s'
  },

};