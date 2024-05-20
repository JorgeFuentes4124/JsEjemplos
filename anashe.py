


dia1 = int(input("Ingrese el día de nacimiento de la primera persona: "))
mes1 = int(input("Ingrese el mes de nacimiento de la primera persona: "))
año1 = int(input("Ingrese el año de nacimiento de la primera persona: "))

# Solicitar la fecha de nacimiento de la segunda persona
dia2 = int(input("Ingrese el día de nacimiento de la segunda persona: "))
mes2 = int(input("Ingrese el mes de nacimiento de la segunda persona: "))
año2 = int(input("Ingrese el año de nacimiento de la segunda persona: "))

# Comparar las fechas de nacimiento
if año1 < año2:
    print("La primera persona es mayor y se le asignará el primer lugar en la fila.")
elif año1 > año2:
    print("La segunda persona es mayor y se le asignará el primer lugar en la fila.")
else:
    if mes1 < mes2:
        print("La primera persona es mayor y se le asignará el primer lugar en la fila.")
    elif mes1 > mes2:
        print("La segunda persona es mayor y se le asignará el primer lugar en la fila.")
    else:
        if dia1 < dia2:
            print("La primera persona es mayor y se le asignará el primer lugar en la fila.")
        elif dia1 > dia2:
            print("La segunda persona es mayor y se le asignará el primer lugar en la fila.")
        else:
            print("Ambas personas tienen la misma fecha de nacimiento.")






















