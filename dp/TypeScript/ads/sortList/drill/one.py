lista = [64, 34, 25, 12, 22, 11, 90]


def bubbleSort(lista):
    p1=0
    lista_acumulativa = []
    #import pdb;pdb.set_trace()
    while p1 < len(lista)-1:
        p2=p1+1
        lista_acumulativa.append(lista)
        while p2 < len(lista):
            if lista[p1]>lista[p2]:
                lista[p1],lista[p2] = lista[p2],lista[p1]
                p2+=1
                lista_acumulativa.append(lista)
                break
            p2=0
            p1+=1

    return lista


lista = [64, 34, 25, 12, 22, 11, 90]
print(bubbleSort(lista))
