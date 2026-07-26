
import { Modal, ModalProps } from 'react-native'
import { View, Text } from 'react-native'
import React from 'react'

interface Props extends ModalProps {
    visible: boolean;  /* Cambio - se muestra o no*/
    onClose: () => void; /* Quiero cerrar el nodal cancelar */
    children: React.ReactNode /*Acepta todo tipo de etiquetas como <View, Image */
}

const CustomModal = ({
    visible,
    onClose,
    children,
    style,
    
}: Props) => {
    return (
    <View>
        <Modal
        visible={visible}
        transparent
        animationType='fade'
        onRequestClose={onClose}      
        >
            <View className='flex-1 p-6 justify-center items-center'
            style={{
                backgroundColor: "rgba(15,23,42,0.80)",
                }}
            >
                <View className="bg-backgroundColorModal rounded-3xl p-6"
                style={{
                    width: "85%",
                    maxWidth: 420,
                
                }}>
                    {children}
                </View>
            </View>

        </Modal>
    </View>
  );
}


export default CustomModal