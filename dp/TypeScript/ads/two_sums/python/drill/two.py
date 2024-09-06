# REcebo uma lista
# TEnho um numero como meta
# A soma de dois numeros da lista tem que se igual ao numero da meta.
# Devo retornar a posicao destes dois numeros
lista = [1,2,3,4,5,6,7,8]

meta = 15

p1=0
p2=p1+1

while p1 is not len(lista)-1:
    while p2 is not len(lista):
        v1=lista[p1]
        v2=lista[p2]
        soma = v1 + v2
        r = {'p1':p1,'p2':p2,'v1':v1,'v2':v2,'soma':soma,'meta':meta}
        if soma == meta:
            print(r)
            break
        p2+=1
    p2=0
    p1+=1




