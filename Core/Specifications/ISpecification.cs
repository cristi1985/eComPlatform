﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>>Criteria { get; } // functie generic care returneaza un boolean
        List<Expression<Func<T, object>>> Includes { get;  } //returneaza un obiect
        Expression<Func<T, object>> OrderBy { get; }
        Expression<Func<T, object>> OrderByDescending { get; }
    }
}
