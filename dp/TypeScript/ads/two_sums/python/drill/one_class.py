class Two_Sum:
    def __init__(self,lista,meta):
        self.lista = lista
        self.meta = meta

    @property
    def two_sums(self):
        p1=0
        p2=p1+1
        while p1 is not len(self.lista)-1:
            while p2 is not  len(self.lista):
                v1=self.lista[p1]
                v2=self.lista[p2]
                soma=v1+v2
                r = {'p1':p1,'p2':p2,'v1':v1,'v2':v2,'soma':soma}
                if soma == self.meta:
                    print(r)
                p2+=1
            p2=0
            p1+=1



ts = Two_Sum([1,2,3,4,5,6,7,8],9)
ts.two_sums()