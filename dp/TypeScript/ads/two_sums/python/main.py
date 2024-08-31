#import pdb;pdb.set_trace()

def two_sums_brute_force_all(lista,meta):
    p1 = 0
    p2 = 1
    v1 =0
    v2 =0
    r = {'p1':p1,'p2':p2,'v1':lista[p1],'v2':lista[p2]}
    #import pdb;pdb.set_trace()
    while p1 is not len(lista) -1:
        while p2 is not len(lista):
            valor = lista[p1] + lista[p2]
            atendeu = valor == meta
            r = {'p1':p1,'p2':p2,'v1':lista[p1],'v2':lista[p2],'meta':meta}
            p2+=1
            if atendeu:
                print(r)
                break 
        p2=1
        p1+=1

    return None

def two_sums_brute_force_first(lista,meta):
    p1 = 0
    p2 = 1
    v1 =0
    v2 =0
    r = {'p1':p1,'p2':p2,'v1':lista[p1],'v2':lista[p2]}
    #import pdb;pdb.set_trace()
    while p1 is not len(lista) -1:
        while p2 is not len(lista):
            valor = lista[p1] + lista[p2]
            atendeu = valor == meta
            r = {'p1':p1,'p2':p2,'v1':lista[p1],'v2':lista[p2],'meta':meta}
            p2+=1
            if atendeu:
                return r
        p2=1
        p1+=1

    return None


# Exemplo de uso
lista = [1, 2, 3, 4, 5, 6];
meta = 9




lista = [1, 2, 3, 4, 5, 6];
meta = 9
print('00000000000')
print(two_sums_brute_force_all(lista,meta))
print(two_sums_brute_force_first(lista,meta))
print('00000000000')




